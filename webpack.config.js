const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/js/index.js',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [{
      test: /src\/.*\.html$/,
      loader: 'html',
    }, {
      test: /src\/css\/.*\.css$/,
      loaders: ['style', 'css'],
    }, {
      test: /assets\/fonts\/.*\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]',
    }, {
      test: /assets\/fonts\/.*\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      loader: 'file?name=fonts/[name].[ext]',
    }, {
      test: /assets\/imgs\/\.(jpe?g|png|gif)$/,
      loader: 'file?name=img/[name].[ext]',
    }],
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new BrowserSyncPlugin({
      server: {
        baseDir: ['dist'],
      },
      port: 3000,
      host: 'localhost',
    }),
    new CopyWebpackPlugin([{
      from: './src/img/**/*',
      to: './imgs',
    }, {
      from: './src/index.html',
      to: './index.html',
    }, {
      from: './src/css/',
      to: './css/',
      toType: 'dir',
    }]),
  ],
};
