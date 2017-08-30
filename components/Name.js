import PropTypes from 'prop-types';

const Name = ({ name }) => (<span>
  {name || '(the other player did not set a name yet)'}
</span>);

Name.propTypes = {
  name: PropTypes.string,
};

export default Name;
