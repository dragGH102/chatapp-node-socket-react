import PropTypes from 'prop-types';
import Error from '../components/Error';

const WithError = ({ children, error, className }) => (<div className={className}>
  {children}
  {error && <Error error={error} />}
</div>);

WithError.propTypes = {
  className: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default WithError;
