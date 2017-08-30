import io from 'socket.io-client'
import Name from '../components/Name';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: null,
      messages: [],
    };
  }

  // connect to WS and listen for events
   componentDidMount() {
       this.socket = io();
       this.socket.on('connected', () => this.handleSocketEvent('connected'));
       this.socket.on('disconnected', () => this.handleSocketEvent('disconnected'));

       // other events
       this.socket.on('INCOMING_MESSAGE', (data) => this.handleSocketEvent('INCOMING_MESSAGE', data));
   }

   handleSocketEvent = (data) => {console.log(data);
      const state = this.state;

      if (event === 'connected') {
        state.messages.push({
            id: new Date().getUTCMilliseconds(),
            content: 'Hey, I\'m ready to chat!',
            author: 'other',
        });
      } else if (event === 'disconnected') {
          state.messages.push({
              id: new Date().getUTCMilliseconds(),
              content: 'Hey, I just left the chat!',
              author: 'other',
          });
      } else if (event === 'INCOMING_MESSAGE') {
          const newMessage = {
              id: new Date().getUTCMilliseconds(),
              content: data.content,
              author: 'other',
              css: data.css,
          };

          state.messages.push(newMessage);
          this.setState(state);
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

    handleNewMessage = (message) => {
       const state = this.state;

       if (message.type) {
           // command
           // TODO
           return;
       }

       // normal message (eventually with styling)
       const newMessage = {
           id: new Date().getUTCMilliseconds(),
           content: message.content,
           author: 'me',
           css: message.css,
           sending: true,
       };

       state.messages.push(newMessage);
       this.setState(state);

       // notify WS
       this.socket.emit('INCOMING_MESSAGE', newMessage);
    };

    render() {
        return (<div
          style={{
            height: '100%',
          }}
        >
          <h3>Welcome to the chat. You are chatting with <Name name={this.state.name} /></h3>
          <Messages messages={this.state.messages}/>
          <NewMessage handleResult={this.handleNewMessage} />
          {/* Make styles available to children */}
          <style jsx global>{`
            .messages-container {
              width: 80%;
              list-style-type: none;
              padding-bottom: 50px;
            }

            .new-message {
              position: fixed;
              border-top: 1px solid #000;
              bottom: 0;
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