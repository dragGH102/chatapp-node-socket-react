import {initialState} from "../../pages/index";
import {socketEventToStateChange} from "../socketEventToStateChange";

describe('socketEventToStateChange', () => {
    it('when event = connected, should add appropriate message to messages', () => {
        const state = initialState;
        const result = socketEventToStateChange(state, 'connected', null);
        expect(result.messages[0].content).toEqual('Hey, I\'m ready to chat!');
    });

    it('when event = disconnected, should add appropriate message to messages', () => {
        // TODO
    });

    it('when event = MESSAGE_SENT, sending for that message and lastMessageSent should be set to false', () => {
        // TODO
    });

    it('when event = INCOMING_MESSAGE, the new message should be added to messages', () => {
        // TODO
    });

    it('when event = REMOVE_MESSAGE, the message with provided id should be removed from messages', () => {
        // TODO
    });
});