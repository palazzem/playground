var path = require('path');

module.exports = {
    debug: true,
    entry: './client/js',
    output: {
        path: 'builds',
        filename: 'main.js',
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./client"
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
            {
                loaders: ['style', 'css', 'sass'],
                include: path.resolve(__dirname, 'client', 'sass'),
                test: /\.scss$/,
            },
            {
                loader: 'html',
                test: /\.html$/
            }
        ],
    },
}
