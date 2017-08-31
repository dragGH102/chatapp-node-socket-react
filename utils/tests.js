import randomUtils from "./random";

module.exports = {
    generateMessage(author) {
        return {
            id: new Date().getUTCMilliseconds() + randomUtils.randomNumberWithingRange(1, 1000),
            content: 'anything',
            author,
            css: {},
        };
    }
};