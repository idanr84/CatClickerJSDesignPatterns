var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    cat : ['babel-polyfill','./src/js/catClicker.js'],
    react : ['babel-polyfill','./src/js/react_index.js'],
  },

  output: {
        path: __dirname + '/src/dst/', filename: '[name].bundle.js',
        publicPath: '/assets/',
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