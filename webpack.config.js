var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        js: "./src/app.jsx"
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },

    devtool: "source-map",

    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
                // test: /bower_components(\/|\\)(PreloadJS|SoundJS|EaselJS|TweenJS)(\/|\\).*\.js$/,
                // loader: 'imports-loader?this=>window!exports-loader?window.createjs'
            }
        ]
    },

    resolve: {
        modules: ["node_modules", "bower_components"],
        descriptionFiles: ["package.json", "bower.json"],
    },

    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        port: 8080,
    }
}