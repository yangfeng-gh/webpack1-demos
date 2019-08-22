var path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders:[
      // { test: /\.css$/, loader: 'style-loader!css-loader' },
      // Alternative syntax:
      { test: /\.css$/, loaders: ["style", "css"] }
    ]
  }
};
