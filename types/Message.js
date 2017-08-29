import PropTypes from 'prop-types';

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  target: PropTypes.string,
  title: PropTypes.string.isRequired
});
