////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.dev.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-26
// MODIFIED: 2020-09-27
// PURPOSE: configuration for dev
// DEPENDENCIES: see below and common
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

// config
module.exports = {
    mode: "development",
    devServer: {
        host: "localhost",
        port: 8000,
        hot: true,
        publicPath: "/",
        historyApiFallback: true,
        writeToDisk: true,
        watchContentBase: true,
    }
}
