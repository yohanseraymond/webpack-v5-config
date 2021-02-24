//! Webpack Merge Varible // 
//const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js'); //TODO Comment out when you want to use webpack.common.js  and add  /* merge(common, */ to module exports: {} //

//PLUGIN varibales 

const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: ['./src/index.js']
    },
    output: {
        filename: 'include.preload.js',
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
                    MiniCssExtractPlugin.loader,
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            cache: false,

        }),
    ],

    devtool: 'eval-source-map',

    devServer: {
        contentBase: './dist',
        hot: true,
    },
}
