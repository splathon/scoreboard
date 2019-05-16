const path = require('path');

const rootPath = path.resolve('');

const config = {
  context: rootPath,
  entry: {
    'extreme-union-match-1': './src/extreme-union-match-1/main.jsx',
  },
  output: {
    path: `${rootPath}/docs`,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    contentBase: `${rootPath}/docs`,
    watchContentBase: true,
    host: '0.0.0.0',
    port: 1234,
    inline: false,
  },
};

module.exports = config;
