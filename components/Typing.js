import PropTypes from 'prop-types';

const Typing = ({ className }) => (<div className={className}>
    The other user is typing...
</div>);

Typing.propTYpes = {
  className: PropTypes.string,
};

export default Typing;
