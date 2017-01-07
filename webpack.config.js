var path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge = require('webpack-merge');

const NODE_ENV = process.env.NODE_ENV || "development";

const common = {};

const development = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  devServer: {
    proxy: [{
      path: '/api/',
      target: 'http://localhost:3001'
    }],
    historyApiFallback: true
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!resolve-url!sass-loader?sourceMap'
      },
      {
        test: /\.(jpg|png|svg|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    })
  ]
};

const production = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'js/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css-loader!resolve-url!sass-loader?sourceMap')
      },
      {
        test: /\.(jpg|png|svg|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(NODE_ENV)
    }),

    new ExtractTextPlugin('styles.css'),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  ]
};

if (NODE_ENV === 'development' || !NODE_ENV) {
  module.exports = merge(development, common);
}

if (NODE_ENV === 'production' || !NODE_ENV) {
  module.exports = merge(production, common);
}
