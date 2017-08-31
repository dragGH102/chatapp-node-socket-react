import PropTypes from 'prop-types';

const Name = ({ name, className }) => (<span className={className}>
  {name || '(the other player did not set a name yet)'}
</span>);

Name.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Name;
