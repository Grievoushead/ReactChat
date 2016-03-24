var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './app/init.jsx',
  output: {
    path: __dirname,
    filename: 'public/scripts/bundle.js',
    // for webpack-dev-server
    //publicPath: path.resolve(__dirname, '/public')
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-object-rest-spread"]
        }
      }
    ]
  },
};
