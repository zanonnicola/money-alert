const resolve = require('path').resolve;
const nodeExternals = require('webpack-node-externals');

// "before_tests": "browserify -t [ babelify ] test/**/*.js -o tests-bundle.js"


module.exports = {
  context: resolve('test'),
  entry: ['babel-polyfill', './test.js'],
  output: {
    path: __dirname,
    filename: 'test-bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          plugins: ['transform-runtime']
        }
      }
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  node: {
    fs: 'empty'
  }
};
