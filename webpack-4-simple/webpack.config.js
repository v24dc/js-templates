// webpack v4 config
const path = require('path');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  entry: { main: './src/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      // {
      //   test: /\.scss$/,
      //   use: [
      //     'style-loader',
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'postcss-loader',
      //     'sass-loader'
      //   ]
      // }
      {
        test: /\.scss$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    watchContentBase: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map',

  plugins: [
    // new ExtractTextPlugin(
    //   {filename: 'style.[hash].css', disable: false, allChunks: true }
    // ),
    // new MiniCssExtractPlugin({
    //   filename: 'style.[contenthash].css'
    // }),
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),
    new WebpackMd5Hash(),
    // new webpack.HotModuleReplacementPlugin({ multiStep: true })
    new webpack.HotModuleReplacementPlugin()
  ]
};
