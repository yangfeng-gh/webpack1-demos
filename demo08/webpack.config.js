var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path');

module.exports = [
  {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'js/[name].js',
      publicPath: './'
    },
    plugins: [
      new HtmlwebpackPlugin({
        title: 'demo08',
        template: './src/template/index.ejs',
        filename: 'index.html',
        favicon: path.resolve('./favicon.ico'),
        inject: true
      }),
      new OpenBrowserPlugin({
        url: 'http://localhost:8080'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      port: 8080,
      compress: true,
      hot: true
    }
  }
];
