////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.common.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-26
// MODIFIED: 2021-03-12
// PURPOSE: configuration to be used in prod and dev
// DEPENDENCIES: see below
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

// load
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const webpack = require("webpack");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");


// configuration
module.exports = {
    entry: [
        "@hot-loader/react-dom",
        "./src/index.js"
    ],
    output: {
        path: path.resolve(__dirname, "..", "public/"),
        filename: "incontrolofeffects.[contenthash].js",
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: "src/*.png",
                    to: "[name].[ext]",
                },
                {
                    from: "src/*.ico",
                    to: "[name].[ext]",
                },
                {
                    from: "src/site.webmanifest",
                    to: "[name].[ext]",
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "incontrolofeffects.[contenthash].css",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: [
                    "babel-loader",
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            // {
            //     test: /\.(woff|woff2|eot|ttf|otf)$/,
            //     use: [
            //         "file-loader"
            //     ]
            // },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ],
        alias: {
            "react-dom": "@hot-loader/react-dom"
        }
    }
}
