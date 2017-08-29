import PropTypes from 'prop-types';

const NewMessage = ({ handleResult }) => (<form
  className="new-message"
  onSubmit={handleResult}
>
  Some content
</form>);

NewMessage.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default NewMessage;
