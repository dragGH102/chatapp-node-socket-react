import _ from "lodash";
import {initialState} from "../../pages/index";
import {socketEventToStateChange} from "../socketEventToStateChange";
import { generateMessage } from "../../utils/tests";

// mock native timer functions (setTimeout etc.)
jest.useFakeTimers();

describe('socketEventToStateChange', () => {
    describe('event = connect', () => {
        it('should set isConnected to true', () => {
            const result = socketEventToStateChange(initialState, 'connect', null);
            expect(result.isConnected).toEqual(true);
        });
    });

    describe('event = disconnect', () => {
        it('should set isConnected to false', () => {
            const result = socketEventToStateChange(initialState, 'disconnect', null);
            expect(result.isConnected).toEqual(false);
        });
    });

    describe('event = connected', () => {
        it('should add appropriate message to messages', () => {
            const result = socketEventToStateChange(initialState, 'connected', null);
            expect(result.messages[0].content).toEqual('Hey, I\'m ready to chat!');
        });
    });

    describe('event = disconnected', () => {
        it('should add appropriate message to messages', () => {
            const result = socketEventToStateChange(initialState, 'disconnected', null);
            expect(result.messages[0].content).toEqual('Hey, I just left the chat!');
        });
    });

    describe('event = MESSAGE_SENT', () => {
        it('lastMessageSent should be set to true and and sending should be set to false', () => {
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
            expect(result.lastMessageSent).toEqual(true);
            expect(result.messages.find((message) => message.id === data.id).sending).toEqual(false);
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

    describe('event = COUNTDOWN', () => {
        const state = initialState;

        const countdownString = '3';
        const data = {
            args: [
                '3',
                'http://www.test.com',
            ]
        };
        const result = socketEventToStateChange(state, 'COUNTDOWN', data);

        it('countdown should be set', () => {
            expect(result.countdown).toEqual(countdownString);
        });

        it('should have called setTimeout', () => {
            expect(setTimeout.mock.calls.length).toBe(1);
        });
    });

    describe('event = TYPING', () => {
        it('isTyping should be set to true', () => {
            const state = initialState;
            const data = {};

            const result = socketEventToStateChange(state, 'TYPING', data);
            expect(result.isTyping).toEqual(true);
        });
    });
});