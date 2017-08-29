import Name from '../components/Name';

export default class ChatApp extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '(the other player did not set a name yet)',
      messages: [],
    }
  }

  render() {
    return (<div>
      <h3>Welcome to the chat. You're chatting with <Name name={this.state.name} /></h3>

    </div>);
  }
}