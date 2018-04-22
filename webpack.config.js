var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, './build');
var APP_DIR = path.resolve(__dirname, './client');

/*
module.exports = {
  entry: './client/app.jsx'
  output: {
    path: __dirname,
    filename: './build/bundle.js'
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
*/
