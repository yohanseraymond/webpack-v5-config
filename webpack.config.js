const path = require('path');// varibale for path //
const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'; // varibale for mode //

const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //varibale plugin for css min//

module.exports = {
    mode: mode,
    //entry for js 
    entry: './src/index.js',
    output: {
        filename: 'bundle.js', //*TODO can be change to any name **//
        path: path.resolve(__dirname, 'dist')   //*TODO can be change to any folder path**//
    },


    module: {
        rules: [
            // CSS MIN LOADER 
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,

                    },

                    'css-loader',
                    'sass-loader',
                ],
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


    plugins: [new MiniCssExtractPlugin()],

    devtool: 'source-map',

    devServer: {
        contentBase: './dist', //*TODO can change to commit changes to the any folder for i.e dist/public/backend/admin *//
        hot: true,
    },
}