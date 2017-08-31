import PropTypes from 'prop-types';

const Error = ({ error }) => (<div className="error">
    {error}
    <style jsx>{`
    .error {
      color: #f00;
    }
    `}</style>
</div>);

Error.propTypes = {
    error: PropTypes.string.isRequired,
};

export default Error;