const webpack = require('webpack');
const path = require('path');
//needed to prevent webpack from putting everything into js file
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const glob = require("glob");

//Image plugins
const { ImageminWebpackPlugin } = require("imagemin-webpack");
const imageminMozjpeg= require("imagemin-mozjpeg");
const imageminSvgo = require("imagemin-svgo");
const imageminOptipng = require("imagemin-optipng");

module.exports = {


    entry: {
        main: "./themes/GCI/scr/scss/all.scss",
        script: glob.sync('./themes/GCI/scr/js/**/*.js'),
        img: glob.sync('./themes/GCI/scr/img/**/*.{png,svg,jpeg,jpg}'),
        logo: "./themes/GCI/scr/img/icons/logo.jpeg",
    },

    output: {
        filename: "js/[name].js",
        //needs to be dumped into static to be read by hugo
        path: path.join(__dirname, "/themes/GCI/static/created"),
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
                    use: ['css-loader', 'sass-loader?sourceMap=true']}),
            },

            //image compression
            {
                loader: "file-loader",
                options: {
                    emitFile: true, // Don't forget emit images
                    name: "img/[name].[ext]",
                    bail: false, // Ignore errors on corrupted images
                },
                test: /\.(jpe?g|png|gif|svg)$/i

            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new FaviconsWebpackPlugin({
            // Your source logo
            logo: './themes/GCI/scr/img/icons/icon.jpg',
            // The prefix for all image files (might be a folder or a name)
            prefix: '/created-icons/',
            emitStats: false,
            persistentCache: true,
            inject: true,
        }),
        new HtmlWebpackPlugin({
            template: 'themes/GCI/scr/img/icons/template.html',
            inject: 'head',
            filename: 'icons.html',
            cache: 'true',
            title: 'Icons',
        }),

        new ImageminWebpackPlugin({
            bail: false, // Ignore errors on corrupted images
            imageminOptions: {
                plugins: [imageminMozjpeg({quality: 90}), imageminSvgo(), imageminOptipng()]
            },
            name: "img/[name].[ext]",
        }),
    ]

};