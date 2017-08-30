import PropTypes from 'prop-types';

const Name  = ({ name }) => (<span>
  {name}
</span>);

Name.propTypes = {
  name: PropTypes.string.isRequired,
};

Name.defaultProps = {
  name: '(the other player did not set a name yet)',
};

export default Name;