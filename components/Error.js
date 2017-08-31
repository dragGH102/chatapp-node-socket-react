import PropTypes from 'prop-types';

import stylesheet from './css/Error.scss'

const Error = ({ error, className }) => (<div className={className}>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    {error}
</div>);

Error.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string.isRequired,
};

export default Error;

