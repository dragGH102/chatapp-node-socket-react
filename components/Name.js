import PropTypes from 'prop-types';

const Name  = ({ name }) => (<span>
  {name}
</span>);

Name.props = {
  name: PropTypes.string.isRequired,
};

export default Name;