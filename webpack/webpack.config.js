var path = require('path');
var webpack = require('webpack');

module.exports = {
    debug: true,
    entry: './client/js',
    output: {
        path: 'builds',
        filename: 'main.js',
        publicPath: '/builds/',
    },
    devtool: 'source-map',
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'main',
            children: true,
            minChunks: 2,
        }),
    ],
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
