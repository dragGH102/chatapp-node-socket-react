import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';

const Emoticon = ({ name, className }) => (<FontAwesome
    name={name}
    className={className}
/>;

Emoticon.propTYpes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default Emoticon;