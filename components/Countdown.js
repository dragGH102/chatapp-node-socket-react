import PropTypes from 'prop-types';

const Countdown = ({ time, className }) => (<div className={className}>
    Redirecting in {time} ...
</div>);

Countdown.propTypes = {
  className: PropTypes.string,
  time: PropTypes.number.isRequired,
};

export default Countdown;
