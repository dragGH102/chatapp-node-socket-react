import Name from '../components/Name';
import Messages from '../components/Messages';

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
    }
  }

  render() {
    return (<div>
      <h3>Welcome to the chat. You're chatting with <Name name={this.state.name} /></h3>
      <Messages messages={this.state.messages}/>
      {/* Make styles available to children */}
      <style jsx global>{`
        .messages-container {
          width: 80%;
          list-style-type: none;
        }
      `}</style>
    </div>);
  }
}