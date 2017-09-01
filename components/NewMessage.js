import PropTypes from 'prop-types';
import _ from 'lodash';
import parseMessage from '../lib/parseMessage';

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      message: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { handleResult } = this.props;

    const result = parseMessage(this.state.message);

    this.setState({
        message: '',
    });

    // pass on to the parent
    handleResult(result);
  };

  handleKeyUp = () => {
    const { handleTypingMessage } = this.props;
    const delay = 300;
    console.log('try debouncing');
    _.debounce(handleTypingMessage, delay);
  };


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
        onKeyUp={this.handleKeyUp}
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
  handleTypingMessage: PropTypes.func.isRequired,
  lastMessageSent: PropTypes.bool.isRequired,
};

export default NewMessage;
