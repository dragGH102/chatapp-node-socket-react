import io from 'socket.io-client';
import _ from 'lodash';
import Name from '../components/Name';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';
import WithError from '../wrappers/WithError';
import socketEventToStateChange from '../lib/socketEventToStateChange';
import handleMessageUtility from '../lib/handleMessageUtility';
import Countdown from '../components/Countdown';
import Typing from '../components/Typing';

export const initialState = {
  name: null,
  messages: [],
  lastMessageSent: true,
  messageIds: [],
  submitError: null,
  countdown: 0,
  isTyping: false,
  isConnected: false,
};

let timeoutInterval = null;
let typingTimeout = null;

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = initialState;
  }

  // connect to WS and listen for events
  componentDidMount() {
    this.socket = io();

    // custom events (other user)
    this.socket.on('connected', () => this.handleSocketEvent('connected'));
    this.socket.on('disconnected', () => this.handleSocketEvent('disconnected'));

    // socket events: dis(connect) for my user
    this.socket.on('connect', () => this.handleSocketEvent('connect'));
    this.socket.on('disconnect', () => this.handleSocketEvent('disconnect'));

    // other events
    this.socket.on('INCOMING_MESSAGE', data => this.handleSocketEvent('INCOMING_MESSAGE', data));
    this.socket.on('MESSAGE_SENT', data => this.handleSocketEvent('MESSAGE_SENT', data));
    this.socket.on('SET_NAME', data => this.handleSocketEvent('SET_NAME', data));
    this.socket.on('REMOVE_MESSAGE', data => this.handleSocketEvent('REMOVE_MESSAGE', data));
    this.socket.on('COUNTDOWN', data => this.handleSocketEvent('COUNTDOWN', data));
    this.socket.on('TYPING', () => this.handleSocketEvent('TYPING'));

    // special functions
    // Creates a throttled function that only invokes func at most once per every wait milliseconds.
    this.throttled = _.throttle(() => this.socket.emit('TYPING'), 250);
  }

  // close socket connection
  componentWillUnmount() {
    this.socket.off('connected');
    this.socket.off('disconnected');

    this.socket.off('INCOMING_MESSAGE');
    this.socket.off('MESSAGE_SENT');
    this.socket.off('SET_NAME');
    this.socket.off('REMOVE_MESSAGE');
    this.socket.off('COUNTDOWN');
    this.socket.off('TYPING');

    this.socket.close();
  }

    // handle message/command to be sent
    handleNewMessage = (message) => {
      const newState = handleMessageUtility(this.state, message, this.socket);
      this.setState(newState);
    };

    // handle incoming socket event
    handleSocketEvent = (event, data) => {
      const newState = socketEventToStateChange(this.state, event, data);

      // handle countdown UI logic
      if (newState.countdown !== 0) {
        timeoutInterval = setInterval(() => {
          const countdown = this.state.countdown - 1;
          this.setState({
            countdown,
          });

          if (countdown === 0) {
            clearInterval(timeoutInterval);
          }
        }, 1000);
      }

      // handle typing UI logic
      if (newState.isTyping) {
        clearTimeout(typingTimeout);
        typingTimeout = setTimeout(() => {
          this.setState({
            isTyping: false,
          });
        }, 500);
      }

      // update state
      this.setState(newState);
    };

    // emit event to WS to inform user is typing
    handleTypingMessage = () => {
      this.throttled();
    };

    render() {
      const { messages, lastMessageSent, submitError, countdown,
        isTyping, isConnected,
      } = this.state;

      let error = submitError;
      if (isConnected === false) {
        error = 'server connection down';
      }

      return (<div
        style={{
          height: '100%',
        }}
      >
        <Messages messages={messages} />
        <WithError
          error={error}
          className="new-message-container"
        >
          <div className="name-container">
            You are chatting with <Name name={this.state.name} />
          </div>
          <NewMessage
            canSubmit={lastMessageSent}
            handleResult={this.handleNewMessage}
            handleTypingMessage={this.handleTypingMessage}
          />
          <div className="state-messages">
            {countdown > 0 && <Countdown time={countdown} className="countdown" />}
            {isTyping && <Typing className="typing" />}
          </div>
        </WithError>
        <style jsx global>{`
            // Make styles available to children
            .messages-container {
              width: 80%;
              list-style-type: none;
              margin-top: 5em;
            }

            .new-message-container {
                position: fixed;
                top: 0;
                width: 100%;
                z-index: 999;
                background-color: #123456;
                padding: 10px;
            }

            .new-message {
              height: 50px;
              padding-top: 15px;
              width: 96%;
              clear: both;
             }

             .new-message input {
                display: block;
                width: 70%;
                height: 20px;
                float: left;
             }

             .new-message button {
                display: block;
                line-height: 20px;
                width: 20%;
                float: right;
             }

            .state-messages .countdown {
                float: left;
                color: #fff;
            }

            .state-messages .typing {
                float: right;
                margin-right: 50px;
                color: #fff;
            }

            .name-container {
              color: #fff;
            }
          `}</style>
      </div>);
    }
}
