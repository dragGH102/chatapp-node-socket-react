import PropTypes from 'prop-types';

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };

    // provide context to bindings
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
    });
  }

  isValidMessage

  handleSubmit(e) {
    const { handleResult } = this.props;
  }

  render() {

    return (<form
      className="new-message"
      onSubmit={handleSubmit}
    >
      <input
        value={this.state.message}
        placeholder="Type a new message..."
        onChange={this.handleChange}
      />
      <button type="submit">Send</button>
    </form>);

  }
}

NewMessage.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default NewMessage;
