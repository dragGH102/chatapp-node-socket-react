/* eslint-disable no-shadow, no-unused-vars */
import _ from 'lodash';
import Scroll from 'react-scroll';

export default (state, event, data) => {
  const newState = _.cloneDeep(state);

  if (event === 'connect') {
    newState.isConnected = true;
  } else if (event === 'disconnect') {
    newState.isConnected = false;
  } else if (event === 'connected') {
    newState.messages.push({
      id: new Date().getUTCMilliseconds(),
      content: 'Hey, I\'m ready to chat!',
      author: 'other',
    });
  } else if (event === 'disconnected') {
    newState.messages.push({
      id: new Date().getUTCMilliseconds(),
      content: 'Hey, I just left the chat!',
      author: 'other',
    });
  } else if (event === 'MESSAGE_SENT') {
    newState.messages.find(message => message.id === data.id).sending = false;
    newState.lastMessageSent = true;
  } else if (event === 'INCOMING_MESSAGE') {
    const newMessage = {
      id: data.id,
      content: data.content,
      author: 'other',
      css: data.css,
    };

    newState.messages.push(newMessage);
    Scroll.animateScroll.scrollToBottom();
  } else if (event === 'REMOVE_MESSAGE') {
    newState.messages.splice(newState.messages.findIndex(
      message => message.id === data.messageId,
    ), 1);
  } else if (event === 'SET_NAME') {
    newState.name = data.name;
  } else if (event === 'COUNTDOWN') {
    newState.countdown = data.args[0];
    const ms = parseInt(data.args[0], 10) * 1000;

    // after time elapsed, force out-of-app redirect
    setTimeout(ms => window.location.replace(data.args[1]), ms);
  } else if (event === 'TYPING') {
    newState.isTyping = true;
  }

  return newState;
};
