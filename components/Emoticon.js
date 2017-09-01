import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Head from 'next/head';

const Emoticon = ({ name, className }) => (<span>
    <Head>
        <link
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
        />
    </Head>
    <FontAwesome
        name={name}
        className={className}
    />
</span>);

Emoticon.propTYpes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default Emoticon;