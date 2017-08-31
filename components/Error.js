import PropTypes from 'prop-types';

const Error = ({ error, className }) => (<div className={`error ${className}`}>
    {error}
    <style jsx>{`
    .error {
      color: #f00;
    }
    `}</style>
</div>);

Error.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string.isRequired,
};

export default Error;

