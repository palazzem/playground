var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var plugins = [
    new webpack.optimize.CommonsChunkPlugin({
        name: 'main',
        children: true,
        minChunks: 2,
    }),
];

// adding production plugins
if (production) {
    plugins = plugins.concat([
        // clean the build folder
        new CleanPlugin('builds'),
        // looks and merges similar chunks, preventing duplication
        new webpack.optimize.DedupePlugin(),
        // optimizes how chunks are used within application
        new webpack.optimize.OccurenceOrderPlugin(),
        // prevents from creating chunks lesser than ~50kb
        new webpack.optimize.MinChunkSizePlugin({
            minChunkSize: 51200,
        }),
        // minifies the JavaScript code
        new webpack.optimize.UglifyJsPlugin(),

        // defines various variables that we can set to false in production to avoid
        // code related to them from being compiled in our final bundle
        // NOTE: the right usage depends on your libraries code
        new webpack.DefinePlugin({
            __SERVER__:      !production,
            __DEVELOPMENT__: !production,
            __DEVTOOLS__:    !production,
            'process.env':   {
                BABEL_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ]);
}

module.exports = {
    debug: !production,
    entry: './client/js',
    output: {
        path: 'builds',
        // TODO: change using [name]-[hash].js
        filename: production ? 'main.js' : 'main.js',
        chunkFilename: '[name]-[chunkhash].js',
        publicPath: '/builds/',
    },
    plugins: plugins,
    devtool: production ? false : 'source-map',
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
