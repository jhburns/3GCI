const path = require('path');
//needed to prevent webpack from putting everything into js file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {

    entry: ["./themes/GCI/scr/scss/all.scss"],

    output: {
        filename: "js/script.js",
        //needs to be dumped into static to be read by hugo
        path: __dirname + "/themes/GCI/static/created",
        libraryTarget: 'umd'
    },

    resolve: {
        extensions: ['.js', '.scss'],
        modules: ['node_modules'],
        descriptionFiles: ['package.json'],
    },

    module: {
        rules: [
            {
                //compile sass
                test: /\.scss/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader!resolve-url-loader!sass-loader?sourceMap=true'})
            },

            //loads files
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                loader: 'file-loader?name=./img/[name].[ext].'
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
};