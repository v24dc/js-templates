// webpack v4 config
const path = require('path');
// const webpack = require('webpack');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const devserverConfig = require('./webpack/devserver');
const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const commonConfig = () => {
  return {
    module: {},
    entry: { main: './src/index.js' },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].[hash].js'
    }
  };
};

module.exports = (evn, options) => {
  console.log(`This is the Webpack 4 'mode': ${options.mode}`);

  const prod = options.mode === 'production';
  const common = commonConfig();
  common.module.rules = rules(prod);
  common.plugins = plugins(prod);

  if (prod) {
    common.optimization = {
      minimizer: [
        new UglifyJsPlugin({
          cache: true,
          parallel: true,
          sourceMap: false // set to true if you want JS source maps
        }),
        new OptimizeCSSAssetsPlugin({})
      ]
    };
  }

  if (prod) {
    return common;
  } else {
    return merge(common, devserverConfig);
  }
};
