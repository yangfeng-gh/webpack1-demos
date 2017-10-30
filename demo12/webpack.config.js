var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
// var webpack = require('webpack'); //方式二

module.exports = {
  entry: {
    bundle1: './main1.jsx',
    bundle2: './main2.jsx'
  },
  output: {
    filename: '[name].js'
  },
  module: {
    loaders:[
      { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' },
    ]
  },
  plugins: [
    new CommonsChunkPlugin('init.js')
    // new webpack.optimize.CommonsChunkPlugin('init', 'init.js') //方式二
  ]
}
