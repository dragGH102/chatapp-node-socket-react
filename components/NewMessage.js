import PropTypes from 'prop-types';

const NewMessage = ({ handleResult }) => (<form onSubmit={handleResult}>

</form>);

NewMessage.propTypes = {
  handleResult: PropTypes.func.isRequired,
};

export default NewMessage;
