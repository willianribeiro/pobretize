'use strict'

const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'src', 'index')
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  resolve: {
    extentions: ['.js', '.jsx', '.css', '.scss', '']
  },

  module: {
    preLoaders: [{
      test: /\.js$/,
      exclude: [/node_modules/, /vendors/],
      include: /src/,
      loader: 'standard'
    }],

    loaders : [{
      test: /\.jsx?$/,
      exclude: [/node_modules/, /vendors/],
      include: /src/,
      loader: 'babel'
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader']
    },
    {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader']
    }]
  },

  plugins : [
    new webpack.HotModuleReplacementPlugin()
  ]

};
