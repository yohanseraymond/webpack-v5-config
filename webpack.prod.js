//! Webpack Merge Varible // 
//const { merge } = require('webpack-merge');
// const common = require('./webpack.common.js'); //TODO Comment out when you want to use webpack.common.js  and add  /* merge(common, */ to module exports: {} //

//Varibles

// const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'; 

//PLUGIN varibales 
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');

const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
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
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            cache: false,

        }),
        new ScriptExtHtmlWebpackPlugin({
            inline: [/\.js$/],
        }),
    ],

}