const areCommandArgsValid = (command, args) =>
  // TODO
  false;


const parseMessage = (message) => {
  const split = message.split(' ');
  if (split[0].substr(0, 1) === '/') {
    // command
    const command = split[0].substr(1);
    split.shift();
    const args = split;

    if (areCommandArgsValid(command, args)) {
      return {
        type: command,
        args,
      };
    }

    // error
    return new Error('syntax error in message');
  }

  // no command
  return {
    id: new Date().getUTCMilliseconds(),
    content: message,
    author: 'me',
  };
};

export default parseMessage;
