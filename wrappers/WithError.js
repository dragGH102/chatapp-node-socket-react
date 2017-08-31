import PropTypes from 'prop-types';

const WithError = ({ children, error }) => (<div>
    {error && <Error error={error} />}
  <div className="error">{error}</div>
</div>);

WithError.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default WithError;
