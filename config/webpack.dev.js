////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.dev.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-26
// MODIFIED: 2020-09-26
// PURPOSE: configuration for dev
// DEPENDENCIES: see below and common
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

// config
module.exports = {
    mode: "development",
    devServer: {
        port: 8000,
        hot: true,
        writeToDisk: true,
    }
}
