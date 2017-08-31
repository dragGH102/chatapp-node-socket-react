import _ from 'lodash';

export const socketEventToStateChange = (state, event, data) => {
    const newState = _.cloneDeep(state);

    if (event === 'connected') {
        newState.messages.push({
            id: new Date().getUTCMilliseconds(),
            content: 'Hey, I\'m ready to chat!',
            author: 'other',
        });
    }
    else if (event === 'disconnected') {
        newState.messages.push({
            id: new Date().getUTCMilliseconds(),
            content: 'Hey, I just left the chat!',
            author: 'other',
        });
    }
    else if (event === 'MESSAGE_SENT'){
        newState.messages.find((message) => message.id === data.id).sending = false;
        newState.lastMessageSent = true;
    }
    else if (event === 'INCOMING_MESSAGE') {
        const newMessage = {
            id: data.id,
            content: data.content,
            author: 'other',
            css: data.css,
        };

        newState.messages.push(newMessage);
    }
    else if (event === 'SET_NAME') {
        newState.name = data.name;
    }
    else if (event === 'REMOVE_MESSAGE') {
        newState.messages.splice(newState.messages.findIndex((message) => message.id === data.messageId), 1);
    }

    return newState;
};
