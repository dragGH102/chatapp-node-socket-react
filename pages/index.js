import Name from '../components/Name';
import Messages from '../components/Messages';
import NewMessage from '../components/NewMessage';

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '(the other player did not set a name yet)',
      messages: [{
        // test
        author: 'me',
        content: 'anything',
        css: null,
        id: new Date().getUTCMilliseconds(),
      },
      {
        // test
        author: 'other',
        content: 'anything 2',
        css: null,
        id: new Date().getUTCMilliseconds() + 1,
      }],
    };

    // provide context to bindings
    this.handleNewMessage.bind(this);
  }

  handleNewMessage(data) {
    console.log(data);
    // TODO
  }

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