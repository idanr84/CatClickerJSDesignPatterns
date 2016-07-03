var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
  // Set up an ES6-ish environment
  'babel-polyfill',

  // Add your application's scripts below
  './src/js/catClicker.js',
],
  output: {
        path: __dirname, filename: './src/dst/bundle.js',
        publicPath: "/assets/",
      },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',

        include: [
        path.resolve(__dirname, "src"),
        ],

        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  resolve: {
    // you can now require('file') instead of require('file.coffee')
    extensions: ['', '.js', '.json']
  }
};