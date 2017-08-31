import PropTypes from 'prop-types';
import Error from "../components/Error";

const WithError = ({ children, error }) => (<div>
    {error && <Error error={error} />}
    {children}
</div>);

WithError.propTypes = {
  error: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default WithError;
