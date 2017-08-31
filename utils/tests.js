import random from "./random";

export default {
    generateMessage(author) {
        return {
            id: new Date().getUTCMilliseconds() + random.randomNumberWithingRange(1, 1000),
            content: 'anything',
            author,
            css: {},
        };
    }
};