import _ from 'lodash';
import Scroll from 'react-scroll';

export const handleMessageUtility = (state, message, socket) => {
    const newState = _.cloneDeep(state);

    if (message.type instanceof Error) {
        newState.submitError = message.type.message;
        return newState;
    }

    // no error -> handle message
    newState.submitError = null;

    if (message.type === 'nick') {
        socket.emit('SET_NAME', message.args.join(' '));
    }
    if (message.type === 'oops') {
        const lastMessageId = newState.messageIds[newState.messageIds.length - 1];
        if (lastMessageId) {
            newState.messages.splice(newState.messages.findIndex((message) => message.id === lastMessageId), 1);
            socket.emit('REMOVE_MESSAGE', lastMessageId);
            newState.messageIds.pop();
        }

    }
    else if (message.type === 'plain') {
        // normal message (eventually with styling)
        let styles = {};
        let content = message.content;

        if (message.type === 'think') {
            styles.color = '#2f4f4f';
            content = message.args.join(' ');
        }

        const id = new Date().getUTCMilliseconds();
        const newMessage = {
            id,
            content: content,
            author: 'me',
            css: styles,
            sending: true,
        };
        newState.messageIds.push(id);

        newState.messages.push(newMessage);
        newState.lastMessageSent = false;

        // notify WS
        socket.emit('INCOMING_MESSAGE', newMessage);
    }

    Scroll.animateScroll.scrollToBottom();

    return newState;
};
