import PropTypes from 'prop-types';
import WithError from '../wrappers/WithError';
import Message from '../components/Message';
import MessageType from '../types/Message';

const Messages  = ({ messages }) => (<ul className="messages-container">
  {messages.map((message) => <li key={message.id}>
    <WithError>
      <Message message={message} />
    </WithError>
  </li>)}
</ul>);

Messages.propTypes = {
  messages: PropTypes.arrayOf(MessageType).isRequired,
};

export default Messages;