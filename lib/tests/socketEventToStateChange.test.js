import {initialState} from "../../pages/index";
import {socketEventToStateChange} from "../socketEventToStateChange";
import testUtils from "../../utils/tests";

describe('socketEventToStateChange', () => {
    it('when event = connected, should add appropriate message to messages', () => {
        const result = socketEventToStateChange(initialState, 'connected', null);
        expect(result.messages[0].content).toEqual('Hey, I\'m ready to chat!');
    });

    it('when event = disconnected, should add appropriate message to messages', () => {
        const result = socketEventToStateChange(initialState, 'disconnected', null);
        expect(result.messages[0].content).toEqual('Hey, I just left the chat!');
    });

    it('when event = MESSAGE_SENT, lastMessageSent should be set to false', () => {
        const state = initialState;
        state.messages = [
            testUtils.generateMessage('me')
        ];

        const result = socketEventToStateChange(state, 'MESSAGE_SENT', {});
        expect(result.lastMessageSent).toBeTruthy();
    });

    it('when event = INCOMING_MESSAGE, the new message should be added to messages', () => {
        // TODO
        const state = initialState;
    });

    it('when event = REMOVE_MESSAGE, the message with provided id should be removed from messages', () => {
        // TODO
        const state = initialState;
    });
});