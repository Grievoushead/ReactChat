var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/init.jsx',
  output: {
    path: __dirname,
    publicPath: path.resolve(__dirname, '/public'),
    filename: 'public/scripts/bundle.js'
  },
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
