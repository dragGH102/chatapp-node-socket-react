import {handleMessageUtility} from "../handleMessageUtility";
import {initialState} from "../../pages/index";

describe('handleMessageUtility', () => {
    // mock socket.io

    const socket = {
      emit(...args) { /* noop method */ }
    };

    describe('submitError', () => {
        it('should have been set if error', () => {
            const state = initialState;
            const errorString = 'some error';
            const message = {
                type: new Error(errorString),
            };

            const result = handleMessageUtility(state, message, socket);
            expect(result.submitError).toEqual(errorString);
        });

        it('should have been set to null if no error', () => {
            const state = initialState;
            const message = {
                type: 'plain',
                content: 'anything',
            };

            const result = handleMessageUtility(state, message, socket);
            expect(result.submitError).toBeNull();
        });
    });

    it('if command = oops, should remove corresponding message', () => {
        // TODO
    });

    it('if not a command, should add the message to messages', () => {
        // TODO
    });
});