import validUrl from 'valid-url';

const areCommandArgsValid = (command, args) => {
  const validCommands = [
    'nick', 'think', 'oops',
    'fadelast', 'highlight', 'countdown',
  ];

  if (validCommands.indexOf(command) === -1) {
    return new Error('invalid command');
  }

  // special commands
  if (command === 'countdown' && (isNaN(args[0]) || !validUrl.isWebUri(args[1]))) {
    // if first arg is not a number or second arg is not a URL
    return new Error('invalid countdown command or url');
  }

  return null;
};

const parseMessage = (message) => {
  const split = message.split(' ');
  if (split[0].substr(0, 1) === '/') {
    // command
    const command = split[0].substr(1);
    split.shift();
    const args = split;

    const error = areCommandArgsValid(command, args);
    return {
      type: error || command,
      args,
    };
  }

  // no command
  return {
    type: 'plain',
    id: new Date().getUTCMilliseconds(),
    content: message,
    author: 'me',
  };
};

export default parseMessage;
