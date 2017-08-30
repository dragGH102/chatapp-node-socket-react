import MessageType from '../types/Message';

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
      clear: both;
      border: 1px solid #000;
      border-radius: 5px;
      height: 1.5em;
      font-size: 1em;
      padding: 2px 10px;
      margin-top: 10px;
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
  `
  }</style>
</div>);

Message.propTypes = {
  message: MessageType.isRequired,
};

export default Message;
