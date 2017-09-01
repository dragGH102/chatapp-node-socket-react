import PropTypes from 'prop-types';

const Countdown = ({ time, className }) => (<div className={`countdown ${className}`}>
    Opening link in {time} ...
</div>);

Countdown.propTypes = {
  className: PropTypes.string,
  time: PropTypes.number.isRequired,
};

export default Countdown;
