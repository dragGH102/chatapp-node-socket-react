import PropTypes from 'prop-types';
import MessageType from '../types/Message';

const parseEmoticons = (message) => {
  
};

const Message = ({ message, lastMessageSent, className }) => (<div className={`slide-in-right ${className}`}>
  <span
    className={`message ${message.author === 'me' ? 'mine' : 'other'}`}
    style={message.css}
  >
    {message.content}
    {message.sending && <span className="sending-label">Sending...</span>}
  </span>
  <style jsx>{`
    .message {
      display: inline-block;
      width: 40%;
      clear: both;
      border: 1px solid #000;
      border-radius: 5px;
      height: 1.5em;
      font-size: 1em;
      padding: 2px 10px;
      margin-top: 10px;
    }

    .slide-in-right {
      animation-name: slideInRight;
      animation-duration: 1s;
      animation-fill-mode: none;
    }

    @keyframes slideInRight {
        0% {
          transform: translateX(100%);
          visibility: visible;
        }
        100% {
          transform: translateX(0%);
        }
    }

    .message.mine {
      float: right;
      text-align: right;
      background-color: #98FB98;
    }

    .message.other {
      float: left;
      text-align: left;
      background-color: #D3D3D3;
    }

    .sending-label {
      color: #0000cc;
      margin-left: 10px;
      display: inline-block;
    }
  `}</style>
</div>);

Message.propTypes = {
  className: PropTypes.string,
  message: MessageType.isRequired,
};

export default Message;