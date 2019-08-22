var HtmlwebpackPlugin = require('html-webpack-plugin');
var path = require('path');

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].[chunkhash].js',
    publicPath: './'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        loader: 'url-loader',
        query: {
          limit: 8192,
          name: path.posix.join('static', 'img/[name].[hash:7].[ext]')
        },
        include: [resolve('static'),resolve('src')]
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: 'demo05',
      template: './src/template/index.ejs',
      filename: 'index.html',
      inject: true,
      favicon: path.resolve('favicon.ico')
    })
  ]
};
