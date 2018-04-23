const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = prod => {
  // common plugins
  const plugins = [
    new MiniCssExtractPlugin({
      filename: `styles/[name].css`
    }),

    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      template: './src/index.html',
      filename: 'index.html'
    }),

    new WebpackMd5Hash()
  ];

  // dev only plugins
  if (!prod) {
    plugins.push(new webpack.HotModuleReplacementPlugin());
  }

  return plugins;
};
