import parseMessage from "../parseMessage";

describe('parseMessage', () => {
   it('should return a new message with the content specified', () => {
      const message = 'hello';
      const result = parseMessage(message);
      expect(result.content).toEqual(message);
   });

    it('should return a command with args, if valid command', () => {
        const message = 
    });

    it('should return an error if invalid command', () => {
        // TODO
    });

    it('should return an error if invalid countdown command', () => {
        // TODO
    });
});