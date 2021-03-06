import PropTypes from 'prop-types';

const Typing = ({ className }) => (<div className={`typing ${className}`}>
    The other user is typing...
</div>);

Typing.propTypes = {
  className: PropTypes.string,
};

export default Typing;
