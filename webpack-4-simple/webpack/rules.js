const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = prod => {
  // common rules
  const rules = [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
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
