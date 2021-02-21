const path = require('path');// varibale for path //
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'; // varibale for mode //

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');


module.exports = {
    mode: mode,
    //entry for js 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', //*TODO can be change to any name **//
        path: path.resolve(__dirname, 'public'),   //*TODO can be change to any folder path**//
        assetModuleFilename: 'images/[hash][ext][query]'
    },


    module: {
        rules: [
            // CSS MIN LOADER 
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    // {
                    //     loader: MiniCssExtractPlugin.loader,

                    // },
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            //IMG Asset/Css Loader
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                // More information here https://webpack.js.org/guides/asset-modules/
                type: "asset",
            },

            //BABEL LOADER
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    //** With additonal settings, this will reference .babelrc **//
                    loader: "babel-loader"
                }
            },
        ],
    },


    plugins: [
        new CleanWebpackPlugin(),
        // new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            // template: "./src/index.html",
            cache: false,
          }),
          new ScriptExtHtmlWebpackPlugin({
            inline: [/\.js$/],
        }),
    ],

    devtool: 'source-map',

    devServer: {
        contentBase: './public', //*TODO can change to commit changes to the any folder for i.e dist/public/backend/admin *//
        hot: true,
    },
}