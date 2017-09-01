import PropTypes from 'prop-types';
import parseMessage from '../lib/parseMessage';

// for the sake of normal use ...
/* eslint-disable jsx-a11y/no-autofocus */

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  /* eslint-disable-next-line */
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
    handleTypingMessage();
  };


  render() {
    const { canSubmit, className } = this.props;

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
        disabled={!canSubmit}
        type="submit"
      >Send</button>
    </form>);
  }
}

NewMessage.propTypes = {
  className: PropTypes.string,
  handleResult: PropTypes.func.isRequired,
  handleTypingMessage: PropTypes.func.isRequired,
  canSubmit: PropTypes.bool.isRequired,
};

export default NewMessage;
