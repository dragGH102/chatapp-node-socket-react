const parseMessage = (message) => {
  const split = message.split(' ');
  if (split[0].substr(0, 1) === '/') {
      // command
      const command = split[0].substr(1);
      split.shift();
      const args = split;

      // parse command and args
      // TODO
      return {};

      // error
      // return new Error('syntax error in message');
  }

  // no command
  return {
      id: new Date().getUTCMilliseconds(),
      content: message,
      author: 'me',
      sent: false,
  };

};

export default parseMessage;
