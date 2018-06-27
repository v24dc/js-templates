// const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry: './src/pages/index.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },

  // output: {
  //   path: path.resolve(__dirname, 'dist'),
  //   filename: '[name].[hash].js'
  // }

  // Enable sourcemaps for debugging webpack's output.
  devtool: 'source-map',

  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json']
  },

  module: {
    rules: [
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      {
        test: /\.css$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
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
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/pages/index.html',
      filename: 'index.html'
    })
  ]
};
