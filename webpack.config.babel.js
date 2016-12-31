const { resolve } = require('path');
const webpackValidator = require('webpack-validator');
const { getIfUtils } = require('webpack-config-utils');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

module.exports = (env) => {
  const { ifProd, ifNotProd, ifProduction } = getIfUtils(env);
  const config = webpackValidator({
    context: resolve('src'),
    entry: './app.js',
    output: {
      path: resolve('dist'),
      filename: 'bundle.js',
      publicPath: '/dist/',
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    performance: {
      hints: ifProd('warning', false),
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            babelrc: ifProd(false, true),
            presets: [
              ['es2015', { modules: false }],
            ],
            plugins: ['transform-runtime'],
          },
        },
        {
          test: /\.css$/,
          include: resolve('src/css'),
          loader: 'style-loader!css-loader!postcss-loader',
        },
      ],
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BROWSER: JSON.stringify(true),
        },
      }),
    ],
    externals: ifProduction([nodeExternals()]),
    node: {
      fs: 'empty',
    },
  });
  if (env.debug) {
    console.log(config);
  }
  return config;
};
