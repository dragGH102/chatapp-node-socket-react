import PropTypes from 'prop-types';

// removed as it breaks Jest tests and in general styled-jsx is enough
// import stylesheet from './css/Error.scss'

const Error = ({ error, className }) => (<div className={`error ${className}`}>
    {/* <style dangerouslySetInnerHTML={{ __html: stylesheet }} /> */}

    <style jsx>{`
    .error {
        color: #f00;
    }
  `}</style>
    {error}
</div>);

Error.propTypes = {
    className: PropTypes.string,
    error: PropTypes.string.isRequired,
};

export default Error;

