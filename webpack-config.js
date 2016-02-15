'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var BUILD_DIR = '/';
var ROOT_PATH = path.resolve(__dirname);
var SOURCE_PATH = path.join(ROOT_PATH, 'examples');

var webpackConfig = {
    entry: {
        index: './index.js'
    },
    module: {
        // @TODO eslint-loader did not update for eslint@2.0.0 yet, bring it back when it is
        //preLoaders: [
        //    {
        //        test: /\.(js|jsx)$/,
        //        loader: 'eslint-loader', // Lint all JS files before compiling the bundles (see .eslintrc for rules)
        //        include: SOURCE_PATH
        //    }
        //],
        loaders: [
            {
                test: /\.css$/,
                loaders: ['style', 'css'], // Loaders are processed last-to-first
                include: SOURCE_PATH
            },
            {
                test: /\.(js|jsx)$/,
                loader: 'babel',
                include: SOURCE_PATH,
                query: {
                    presets: ['es2015', 'react', 'stage-1']
                }
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devtool: 'source-map',
    output: {
        publicPath: BUILD_DIR, // Dev servers will expose bundles in this web directory
        filename: '[name]-bundle-[hash].js',
        path: path.resolve(ROOT_PATH, BUILD_DIR)  // Put bundle files in this directory (Note: dev server does not generate bundle files)
    },
    devServer: {
        port: 3000
    },
    eslint: {
        //failOnWarning: true,
        failOnError: true
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({title: 'Facebook Flow Examples'})
    ]
};


module.exports = webpackConfig;
