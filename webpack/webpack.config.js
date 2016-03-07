var path = require('path');

module.exports = {
    entry: './client/js',
    output: {
        path: 'builds',
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'client', 'js'),
                test: /\.js$/,
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                },
            },
        ],
    }
}
