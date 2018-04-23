// dev server config
module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    watchContentBase: true,
    historyApiFallback: true
  },
  devtool: 'inline-source-map'
};
