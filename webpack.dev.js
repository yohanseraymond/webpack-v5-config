//! Webpack Merge Varible // 
//const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js'); //TODO Comment out when you want to use webpack.common.js  and add  /* merge(common, */ to module exports: {} //

//PLUGIN varibales 

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '',
        assetModuleFilename: 'images/[hash][ext]'
    },

    module: {
        rules: [
            // CSS MIN LOADER 
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            //ASSET LOADER
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                type: "asset/resource",
                generator: {
                    filename: 'images/[hash][ext]'
                },
            },

            //BABEL LOADER
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
        ]
    },

    //PLUGINS
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            cache: false,

        }),
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: './dist',
        hot: true,
    },
}
