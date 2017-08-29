import PropTypes from 'prop-types';
import WithError from '../wrappers/WithError';
import Message from '../components/Message';

const Messages  = ({ messages }) => (<ul>
  {messages.map((message) => <li key={message.id}>
    <WithError>
      <Message message={message} />
    </WithError>
  </li>)}
</ul>);

Name.props = {
  name: PropTypes.string.isRequired,
};

export default Messages;