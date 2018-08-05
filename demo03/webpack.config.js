// babel-loader6版本有问题，6.2.5可以正常使用
module.exports = {
  entry: './main.jsx',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      //   {
      //     test: /\.js[x]?$/,
      //     exclude: /node_modules/,
      //     loader: 'babel-loader?presets[]=es2015&presets[]=react',
      //   },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        // loader: 'jsx-loader?harmony'
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
};
