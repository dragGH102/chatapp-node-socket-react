import PropTypes from 'prop-types';

const Message = ({ message }) => (<div>
  <span
    className={`message ${message.author === 'me' ? 'mine' : 'other'}`}
    style={message.css}
  >
    {message.content}
  </span>
  <style jsx>{`
    .message {
      width: 40%;
    }

    .message.mine {
      float: right;
    }

    .message.other {
      float: left;
    }
  `
  }</style>
</div>);

Message.propTypes = {
  message: PropTypes.shape({
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    css: PropTypes.string,
  }),
};
export default Message;