const webpack = require('webpack');
const path = require('path');
//needed to prevent webpack from putting everything into js file
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const glob = require("glob");

//Image plugins
const { ImageminWebpackPlugin } = require("imagemin-webpack");
const imageminMozjpeg= require("imagemin-mozjpeg");
const imageminSvgo = require("imagemin-svgo");
const imageminOptipng = require("imagemin-optipng");

module.exports = {

    entry: {
        main: "./themes/GCI/scr/scss/all.scss",
        no_scroll: "./themes/GCI/scr/js/no_scroll.js",
        icons: glob.sync("./themes/GCI/scr/img/icons/hamburger/*.svg"),
        logo: "./themes/GCI/scr/img/icons/logo.jpeg",
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
                    emitFile: true, // Don't forget emit images
                    name: "img/[name].[ext]",
                    bail: false, // Ignore errors on corrupted images
                    cache: true,
                },
                test: /\.(jpe?g|png|gif|svg)$/i

            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new ImageminWebpackPlugin({
            bail: false, // Ignore errors on corrupted images
            cache: true,
            imageminOptions: {
                plugins: [imageminMozjpeg({quality: 100}), imageminSvgo(), imageminOptipng()]
            },
            name: "img/[name].[ext]",
        }),
    ]

};