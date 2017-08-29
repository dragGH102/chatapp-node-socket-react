import PropTypes from 'prop-types';

const Name  = ({ name }) => (<div>
  {name}
</div>);

Name.props = {
  name: PropTypes.string.isRequired,
};

Name.defaultProps = {
  name: "",
};

export default Name;