import randomUtils from "./random";

export default {
    generateMessage(author) {
        return {
            id: new Date().getUTCMilliseconds() + randomUtils.randomNumberWithingRange(1, 1000),
            content: 'anything',
            author,
            css: {},
        };
    }
};