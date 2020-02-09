var path = require('path');
var webpack = require('webpack');
var CleanPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var production = process.env.NODE_ENV === 'production';

var extractCSS = new ExtractTextPlugin('bundle.css', {allChunks: true});

var plugins = [
    extractCSS,
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
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'xo-loader',
                include: path.resolve(__dirname, 'client', 'js'),
            },
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015'],
                },
            },
            {
                test: /\.js$/,
                loader: 'baggage?[file].html=template&[file].scss',
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.scss$/,
                loader: extractCSS.extract('style', 'css!sass'),
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.html$/,
                loader: 'html',
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/i,
                loader: 'url',
                query: {
                    // if the image is lesser than ~10kb, inline it
                    // otherwise fallback to the file-loader and
                    // reference it
                    limit: 10000,
                },
            },
        ],
    },
    devtool: production ? false : 'source-map',
    xo: {
        envs: ["browser"],
        space: 4,
    },
}
