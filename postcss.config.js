// @source: https://github.com/davibe/next.js-example-with-global-stylesheet/blob/master/postcss.config.js
module.exports = {
    plugins: [
        require('postcss-easy-import')({prefix: '_'}), // keep this first
        require('autoprefixer')({ /* ...options */ }) // so imports are auto-prefixed too
    ]
}