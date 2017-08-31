const path = require('path')
const glob = require('glob')

module.exports = {
    // webpack custom config to import stylesheet within components
    // The strategy here is to transpile the stylesheet file to a css-in-js file
    // so that it can be loaded and hot reloaded both on the server and the client..
    // @source: https://github.com/davibe/next.js-example-with-global-stylesheet/blob/master/next.config.js
    webpack: (config, { dev }) => {
        config.module.rules.push(
            {
                test: /\.(css|scss)/,
                loader: 'emit-file-loader',
                options: {
                    name: 'dist/[path][name].[ext]'
                }
            }
            ,
            {
                test: /\.css$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader']
            }
            ,
            {
                test: /\.s(a|c)ss$/,
                use: ['babel-loader', 'raw-loader', 'postcss-loader',
                    { loader: 'sass-loader',
                        options: {
                            includePaths: ['styles', 'node_modules']
                                .map((d) => path.join(__dirname, d))
                                .map((g) => glob.sync(g))
                                .reduce((a, c) => a.concat(c), [])
                        }
                    }
                ]
            }
        );
        return config
    }
};
