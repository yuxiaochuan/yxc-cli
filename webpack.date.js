var webpack = require('webpack'),
path = require('path'),
uglifyJsPlugin = webpack.optimize.UglifyJsPlugin,
CleanPlugin = require('clean-webpack-plugin');


module.exports = {
    entry: {
        "index": "./src/index/entry.js"
    },
    output: {
        path: "dist/",
        publicPath: '',
        filename: '[name].js'
    },
    module: {
        loaders: [
        // {test: /lib\/zepto\.js$/, loader: "expose?$!expose?jQuery"},
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader?minimize!sass-loader'
        },
        {
            test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        },
        {
            test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/font-woff'
        },
        {
            test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=application/octet-stream'
        },
        {
            test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'file'
        },
        {
            test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
            loader: 'url?limit=10000&minetype=image/svg+xml'
        },
        {
            test: /\.mustache$/,
            loader: 'mustache'
        }]
    },
}