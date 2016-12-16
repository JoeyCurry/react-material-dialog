var path = require('path');
var webpack = require('webpack');
const node_modules_dir = path.resolve(__dirname, 'node_modules');

var config = {
  devtool: 'eval',
  entry: {
      entry: [
        'webpack-dev-server/client?http://0.0.0.0:1100',
        'webpack/hot/dev-server',
        './example/index.js'
      ],
      common: [
        'webpack-dev-server/client?http://0.0.0.0:1100',
        'webpack/hot/dev-server',
      ]
  },
  output: {
    path: path.join(__dirname, 'dest'),
    filename: '[name].js',
    publicPath: '/deploy/'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
    compress: {
        warnings:false
    },
    output: {
        comments: false
    }
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
    {
        test: /\.css$/,
        loader: 'style!css?module&localIdentName=[hash:base64:5]&-url'
    },
    {
        test: /\.less$/,
        loader: 'style!less'
    },
    {
        test: /\.sass$/,
        loader: 'style!sass'
    },
    {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: [node_modules_dir],
        query: {
            presets: ['es2015']
        }
    },
    {
        test: /\.(png|jpg)$/,
        exclude: [node_modules_dir],
        loader: 'url?limit=6400'
    },
    {
        test: /\.json$/,
        loader: 'json'
    }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: "error-only",
    host:'0.0.0.0',
    port: 1100
  }
};

module.exports = config
