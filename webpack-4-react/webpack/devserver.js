// dev server config
module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    inline: true,
    watchContentBase: true,
    historyApiFallback: true,
    disableHostCheck: true
  },
  devtool: 'inline-source-map'
};
