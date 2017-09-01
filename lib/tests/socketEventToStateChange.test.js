import _ from "lodash";
import {initialState} from "../../pages/index";
import {socketEventToStateChange} from "../socketEventToStateChange";
import { generateMessage } from "../../utils/tests";

describe('socketEventToStateChange', () => {
    it('when event = connected, should add appropriate message to messages', () => {
        const result = socketEventToStateChange(initialState, 'connected', null);
        expect(result.messages[0].content).toEqual('Hey, I\'m ready to chat!');
    });

    it('when event = disconnected, should add appropriate message to messages', () => {
        const result = socketEventToStateChange(initialState, 'disconnected', null);
        expect(result.messages[0].content).toEqual('Hey, I just left the chat!');
    });

    describe('event = MESSAGE_SENT', () => {
        it('lastMessageSent and the message\'s sending property should be set to false', () => {
            const state = _.cloneDeep(initialState);
            state.messages = [
                generateMessage('me')
            ];
            state.messages[0].sending = true;

            const lastMessageId = state.messages[0].id;
            const data = {
                id: lastMessageId,
            };

            const result = socketEventToStateChange(state, 'MESSAGE_SENT', data);
            expect(result.lastMessageSent).toBeTruthy();
            expect(result.messages.find((message) => message.id === data.id).sending).toBeFalsy();
        });
    });

    describe('event = INCOMING_MESSAGE', () => {
        it('the new message should be added to messages', () => {
            const state = initialState;
            const data = generateMessage('other');

            const result = socketEventToStateChange(state, 'INCOMING_MESSAGE', data);
            expect(result.messages[0]).toEqual(data);

        });
    });

    describe('event = REMOVE_MESSAGE', () => {
        it('the message with provided id should be removed from messages', () => {
            const state = _.cloneDeep(initialState);
            const newMessage = generateMessage('other');
            state.messages.push(newMessage);

            const data = {
                messageId: newMessage.id
            };

            const result = socketEventToStateChange(state, 'REMOVE_MESSAGE', data);
            expect(result.messages.findIndex((message) => message.id === newMessage.id)).toEqual(-1);
        });
    });

    describe('event = SET_NAME', () => {
        it('name should be set', () => {
            const state = initialState;

            const name = 'my name';
            const data = {
                name,
            };

            const result = socketEventToStateChange(state, 'SET_NAME', data);
            expect(result.name).toEqual(name);
        });
    });
});