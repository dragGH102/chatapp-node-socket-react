import PropTypes from 'prop-types';

class NewMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };

    // provide context to bindings
  }



  render() {
    const { handleResult } = this.props;

    return (<form
      className="new-message"
      onSubmit={handleResult}
    >
      <input
        value={this.state.message}
        placeholder="Type a new message..."
      />
      <button
        type="submit"
        value="Send"
      />
    </form>);

  }
}

NewMessage.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default NewMessage;
