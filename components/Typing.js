import PropTypes from 'prop-types';

const Typing = ({ time, className }) => (<div className={`typing ${className}`}>
    <style jsx>{`
    .typing {
        color: #fff;
    }
  `}</style>
    The other user is typing...
</div>);

Typing.propTYpes = {
    className: PropTypes.string,
    time: PropTypes.number.isRequired,
};

export default Typing;