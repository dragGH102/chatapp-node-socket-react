import io from 'socket.io-client'
import Name from '../components/Name';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';
import WithError from "../wrappers/WithError";
import {socketEventToStateChange} from "../lib/socketEventToStateChange";
import {handleMessageUtility} from "../lib/handleMessageUtility";
import Countdown from "../components/Countdown";

export let initialState = {
    name: null,
    messages: [],
    lastMessageSent: true,
    messageIds: [],
    submitError: null,
    countdown: 0,
};

let timeoutInterval = null;

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = initialState;
  }

  // connect to WS and listen for events
   componentDidMount() {
       this.socket = io();
       this.socket.on('connected', () => this.handleSocketEvent('connected'));
       this.socket.on('disconnected', () => this.handleSocketEvent('disconnected'));

       // other events
       this.socket.on('INCOMING_MESSAGE', (data) => this.handleSocketEvent('INCOMING_MESSAGE', data));
       this.socket.on('MESSAGE_SENT', (data) => this.handleSocketEvent('MESSAGE_SENT', data));
       this.socket.on('SET_NAME', (data) => this.handleSocketEvent('SET_NAME', data));
       this.socket.on('REMOVE_MESSAGE', (data) => this.handleSocketEvent('REMOVE_MESSAGE', data));
       this.socket.on('COUNTDOWN', (data) => this.handleSocketEvent('COUNTDOWN', data));
   }

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

      // update state
      this.setState(newState);
   };

    // close socket connection
    componentWillUnmount() {
        this.socket.off('connected');
        this.socket.off('disconnected');
        // TODO: add off for other events

        this.socket.close();
    }

    // handle message/command to be sent
    handleNewMessage = (message) => {
       const newState = handleMessageUtility(this.state, message, this.socket);
       this.setState(newState);
    };

    render() {
        const { messages, lastMessageSent, submitError, countdown } = this.state;

        return (<div
          style={{
            height: '100%',
          }}
        >
          <div style={{
              height: '50px',
            }}
          >
            <h3>You are chatting with <Name name={this.state.name} /></h3>
          </div>
          <Messages messages={messages}/>
          <WithError
              error={submitError}
              className="new-message__container"
          >
              <NewMessage
                  lastMessageSent={lastMessageSent}
                  handleResult={this.handleNewMessage}
              />
              {countdown > 0 && <Countdown time={countdown} />}
          </WithError>
          {/* Make styles available to children */}
          <style jsx global>{`
            .messages-container {
              width: 80%;
              list-style-type: none;
              margin-top: 3em;
            }

            .new-message__container {
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
          `}</style>
        </div>);
    }
}