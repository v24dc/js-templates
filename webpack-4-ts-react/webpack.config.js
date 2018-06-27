// webpack v4 config
const path = require('path');
const merge = require('webpack-merge');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const devserverConfig = require('./webpack/devserver');
const rules = require('./webpack/rules');
const plugins = require('./webpack/plugins');

const commonConfig = () => {
  return {
    module: {},
    resolve: {
      // Add '.ts' and '.tsx' as resolvable extensions.
      extensions: ['.ts', '.tsx', '.js', '.json']
    },
    entry: { main: './src/pages/index.tsx' },
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

// module.exports = {
//   entry: './src/pages/index.tsx',
//   output: {
//     filename: 'bundle.js',
//     // path: __dirname + '/dist'
//     path: path.resolve(__dirname, 'dist')
//   },

//   // Enable sourcemaps for debugging webpack's output.
//   devtool: 'source-map',

//   resolve: {
//     // Add '.ts' and '.tsx' as resolvable extensions.
//     extensions: ['.ts', '.tsx', '.js', '.json']
//   },

//   module: {
//     rules: [
//       // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
//       { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },

//       // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
//       { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
//       {
//         test: /\.css$/,
//         use: [
//           'css-hot-loader',
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'postcss-loader'
//         ]
//       },
//       {
//         test: /\.scss$/,
//         use: [
//           'css-hot-loader',
//           MiniCssExtractPlugin.loader,
//           'css-loader',
//           'postcss-loader',
//           'sass-loader'
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: 'styles/[name].css'
//     }),

//     new HtmlWebpackPlugin({
//       inject: false,
//       hash: true,
//       template: './src/pages/index.html',
//       filename: 'index.html'
//     })
//   ]
// };
