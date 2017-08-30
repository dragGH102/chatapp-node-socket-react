import PropTypes from 'prop-types';
import parseMessage from '../lib/parseMessage';

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
      error: null,
    };

    // provide context to bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    const {handleResult} = this.props;

    const result = parseMessage(this.state.message);

    if (!(result instanceof Error)) {
      handleResult(result);
      return;
    }

    // invalid message
    this.setState({
      error: result,
    });
  }


  render() {
    const { lastMessageSent } = this.props;

    return (<form
      className="new-message"
      onSubmit={this.handleSubmit}
    >
      <input
        value={this.state.message}
        placeholder="Type a new message..."
        onChange={this.handleChange}
      />
      <button
          disabled={!lastMessageSent}
          type="submit"
      >Send</button>
    </form>);

  }
}

NewMessage.propTypes = {
  handleResult: PropTypes.func.isRequired,
  lastMessageSent: PropTypes.bool.isRequired,
};

export default NewMessage;
