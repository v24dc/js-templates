// webpack v4 config
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const devserverConfig = require('./webpack/devserver');
const rules = require('./webpack/rules');

const commonConfig = prod => {
  return {
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    },
    module: {
      // rules: [
      //   {
      //     test: /\.js$/,
      //     exclude: /node_modules/,
      //     use: {
      //       loader: 'babel-loader'
      //     }
      //   },
      //   {
      //     test: /\.scss$/,
      //     use: [
      //       'css-hot-loader',
      //       MiniCssExtractPlugin.loader,
      //       'css-loader',
      //       'postcss-loader',
      //       'sass-loader'
      //     ]
      //   }
      // ]
    },

    plugins: [
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
};

module.exports = (evn, options) => {
  console.log(`This is the Webpack 4 'mode': ${options.mode}`);

  const prod = options.mode === 'production';
  
  const common = commonConfig(prod);
  common.module.rules = rules(prod);

  if (prod) {
    return common;
  } else {
    return merge(commonConfig(prod), devserverConfig);
  }
};
