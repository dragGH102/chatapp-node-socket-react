import PropTypes from 'prop-types';

export default PropTypes.shape({
  id: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired, // me | other
  content: PropTypes.string.isRequired,
  css: PropTypes.string,
  type: PropTypes.string, // <command> | null
  sent: PropTypes.bool,
});
