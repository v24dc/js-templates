const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = prod => {
  // common rules
  const rules = [
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
    }
  ];

  if (prod) {
    // production only rules
    rules.push({
      test: /\.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    });
  } else {
    // development only rules
    rules.push({
      test: /\.scss$/,
      use: [
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader',
        'sass-loader'
      ]
    });
  }

  return rules;
};
