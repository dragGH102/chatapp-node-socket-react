import io from 'socket.io-client'
import Name from '../components/Name';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';
import _ from 'lodash';
import WithError from "../wrappers/WithError";

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: null,
      messages: [],
      lastMessageSent: true,
      messageIds: [],
      submitError: null,
    };
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
   }

   // handle incoming socket event
   handleSocketEvent = (event, data) => {
      const state = _.cloneDeep(this.state);

      if (event === 'connected') {
        state.messages.push({
            id: new Date().getUTCMilliseconds(),
            content: 'Hey, I\'m ready to chat!',
            author: 'other',
        });
      }
      else if (event === 'disconnected') {
          state.messages.push({
              id: new Date().getUTCMilliseconds(),
              content: 'Hey, I just left the chat!',
              author: 'other',
          });
      }
      else if (event === 'MESSAGE_SENT'){
          state.messages.find((message) => message.id === data.id).sending = false;
          state.lastMessageSent = true;
      }
      else if (event === 'INCOMING_MESSAGE') {
          const newMessage = {
              id: data.id,
              content: data.content,
              author: 'other',
              css: data.css,
          };

          state.messages.push(newMessage);
      }
      else if (event === 'SET_NAME') {
          state.name = data.name;
      }
      else if (event === 'REMOVE_MESSAGE') {
          state.messages.splice(state.messages.findIndex((message) => message.id === data.messageId), 1);
      }

      // update state
      this.setState(state);
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
       const state = _.cloneDeep(this.state);

       if (message instanceof Error) {
           state.submitError = message.message;
           this.setState(state);
           return;
       }

       // no error -> handle message
       state.submitError = null;

       if (message.type === 'name') {
           // TODO: ! change from "name" to "nick"
           this.socket.emit('SET_NAME', message.args.join(' '));
       }
        if (message.type === 'oops') {
            const lastMessageId = state.messageIds[state.messageIds.length - 1];
            if (lastMessageId) {
                state.messages.splice(state.messages.findIndex((message) => message.id === lastMessageId), 1);
                this.socket.emit('REMOVE_MESSAGE', lastMessageId);
                state.messageIds.pop();
            }

        }
       else {
           // normal message (eventually with styling)
           let styles = {};
           let content = message.content;

           if (message.type === 'think') {
               styles.color = '#2f4f4f';
               content = message.args.join(' ');
           }

           const id = new Date().getUTCMilliseconds();
           const newMessage = {
               id,
               content: content,
               author: 'me',
               css: styles,
               sending: true,
           };
           state.messageIds.push(id);

           state.messages.push(newMessage);
           state.lastMessageSent = false;

           // notify WS
           this.socket.emit('INCOMING_MESSAGE', newMessage);
       }

       this.setState(state);
    };

    render() {
        const { messages, lastMessageSent, submitError } = this.state;

        return (<div
          style={{
            height: '100%',
          }}
        >
          <h3>Welcome to the chat. You are chatting with <Name name={this.state.name} /></h3>
          <Messages messages={messages}/>
          <WithError
              error={submitError}
              className="new-message__container"
          >
              <NewMessage
                  lastMessageSent={lastMessageSent}
                  handleResult={this.handleNewMessage}
              />
          </WithError>
          {/* Make styles available to children */}
          <style jsx global>{`
            .messages-container {
              width: 80%;
              list-style-type: none;
              padding-bottom: 50px;
            }

            .new-message__container {
              position: fixed;
              bottom: 0;
              width: 100%;
            }

            .new-message {
              border-top: 1px solid #000;
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