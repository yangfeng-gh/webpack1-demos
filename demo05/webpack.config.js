var HtmlwebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash].js',
        publicPath: '/'
    },
    module: {
        loaders: [{
            test: /\.(png|jpg)$/,
            loader: 'url-loader',
            options: {
                limit: 8192,
                name: 'assets/[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({ title: 'demo05', template: './src/template/index.ejs', filename: 'index.html', inject: true }),
        new OpenBrowserPlugin({ url: 'http://localhost:8080' })
    ]
};