import PropTypes from 'prop-types';
import parseMessage from '../lib/parseMessage';

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
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

    const { handleResult } = this.props;

    const result = parseMessage(this.state.message);

    this.setState({
        message: '',
    });

    // pass on to the parent
    handleResult(result);
  }


  render() {
    const { lastMessageSent, className } = this.props;

    return (<form
      className={`new-message ${className}`}
      onSubmit={this.handleSubmit}
    >
      <input
        autoFocus
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
  className: PropTypes.string,
  handleResult: PropTypes.func.isRequired,
  lastMessageSent: PropTypes.bool.isRequired,
};

export default NewMessage;
