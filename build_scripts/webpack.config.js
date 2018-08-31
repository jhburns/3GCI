const webpack = require('webpack');
const path = require('path');
//needed to prevent webpack from putting everything into js file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob = require("glob");

module.exports = {

    entry: {
        main: "./themes/GCI/scr/scss/all.scss",
        script: glob.sync('./themes/GCI/scr/js/**/*.js'),
        img: glob.sync('./themes/GCI/scr/img/**/*.{png,svg,jpeg,jpg}'),
        thumbnail: glob.sync('./themes/GCI/scr/img/thumbnails/*.thm'),
    },

    output: {
        filename: "js/[name].js",
        //needs to be dumped into static to be read by hugo
        path: path.join(__dirname, "/themes/GCI/static/created"),
        libraryTarget: 'umd',
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
                    use: ['css-loader', 'sass-loader?sourceMap=true'],
                    disable: true,
                }),
            },

            //image compression
            {
                loader: "file-loader",
                options: {
                    name: "img/[name].[ext]",
                },
                test: /\.(jpe?g|png|svg)$/i

            },

            {
                loader: "file-loader",
                options: {
                    name: "img/[name].thm",
                    emitFile: true,
                },
                test: /\.(thm)$/i
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]

};