import _ from 'lodash';
import {handleMessageUtility} from "../handleMessageUtility";
import {initialState} from "../../pages/index";
import { generateMessage } from '../../utils/tests';

describe('handleMessageUtility', () => {
    // mock socket.io
    const socket = {
      emit(...args) { /* noop method */ }
    };

    describe('submitError', () => {
        it('should have been set if error', () => {
            const state = _.cloneDeep(initialState);
            const errorString = 'some error';
            const message = {
                type: new Error(errorString),
            };

            const result = handleMessageUtility(state, message, socket);
            expect(result.submitError).toEqual(errorString);
        });

        it('should have been set to null if no error', () => {
            const state = _.cloneDeep(initialState);
            const message = {
                type: 'plain',
                content: 'anything',
            };

            const result = handleMessageUtility(state, message, socket);
            expect(result.submitError).toBeNull();
        });
    });

    it('if command = oops, should remove corresponding message', () => {
        const state = _.cloneDeep(initialState);
        state.messages = [
            generateMessage('me', 1),
            generateMessage('other', 2),
            generateMessage('me', 3),
        ];
        state.messageIds = [1, 2, 3];
        const message = {
            type: 'oops',
        };

        const lastMessageId = state.messageIds[state.messageIds.length - 1];

        const result = handleMessageUtility(state, message, socket);
        expect(result.messages.findIndex((message) => message.id === lastMessageId)).toEqual(-1);
        expect(result.messageIds.findIndex((id) => id === lastMessageId)).toEqual(-1);
    });

    it('if command = fadelast, last message\'s opacity should be set to 0.1', () => {
        const state = _.cloneDeep(initialState);
        state.messages = [
            generateMessage('me', 1),
            generateMessage('other', 2),
            generateMessage('me', 3),
        ];
        state.messageIds = [1, 2, 3];
        const lastMessageId = state.messageIds[state.messageIds.length - 1];

        const message = {
            type: 'fadelast',
        };

        const result = handleMessageUtility(state, message, socket);
        expect(result.messages.find((message) => message.id === lastMessageId).css.opacity).toEqual('0.1');
    });

    it('if not a command, should add the message to messages', () => {
        const state = _.cloneDeep(initialState);
        const message = generateMessage('me');
        const messageWithType = _.clone(message);
        messageWithType.type ='plain';
        const result = handleMessageUtility(state, messageWithType, socket);
        // we can't check for equality as the id is generated randomly
        expect(result.messages[0]).toBeDefined();
    });
});