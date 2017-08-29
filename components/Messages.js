import PropTypes from 'prop-types';
import WithError from '../wrappers/WithError';
import * as React from 'react';

const Messages  = ({ messages }) => (<ul>
  {messages.map((message) => <li>
    <WithError>
      <Message message={message}
    </WithError>
  </li>)}
</ul>);

Name.props = {
  name: PropTypes.string.isRequired,
};

export default Messages;