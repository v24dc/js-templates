const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = prod => {
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
