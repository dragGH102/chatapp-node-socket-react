import parseMessage from "../parseMessage";

describe('parseMessage', () => {
   it('should return a new message with the content specified', () => {
      const message = 'hello';
      const result = parseMessage(message);
      expect(result.content).toEqual(message);
   });

    it('should return a command with args, if valid command', () => {
        const messageWithNoArgs = '/oops';
        const messageWithOneArg = '/nick name';
        const messageWithTwoArgs = '/countdown 3 https://www.test.com';

        expect(parseMessage(messageWithNoArgs)).toHaveProperty('type', 'oops');

        expect(parseMessage(messageWithOneArg)).toHaveProperty('type', 'nick');
        expect(parseMessage(messageWithOneArg).args[0]).toEqual('name');

        expect(parseMessage(messageWithTwoArgs)).toHaveProperty('type', 'countdown');
        expect(parseMessage(messageWithTwoArgs).args[0]).toBe('3');
        expect(parseMessage(messageWithTwoArgs).args[1]).toBe('https://www.test.com');
    });

    it('should return an error if invalid command', () => {
        // TODO
    });

    it('should return an error if invalid countdown command', () => {
        // TODO
    });
});