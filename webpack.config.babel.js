const { resolve } = require('path');
const webpackValidator = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { getIfUtils, removeEmpty } = require('webpack-config-utils');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OfflinePlugin = require('offline-plugin');

module.exports = (env) => {
  const { ifProd, ifNotProd, ifProduction } = getIfUtils(env);
  const config = webpackValidator({
    context: resolve('src'),
    entry: {
      app: ['babel-polyfill', 'whatwg-fetch', './app.js'],
      vendor: ['./vendor/lib.js'],
    },
    output: {
      path: resolve('dist'),
      filename: ifProd('bundle.[name].[chunkhash].js', 'bundle.[name].js'),
      pathinfo: ifNotProd(),
    },
    devtool: ifProd('source-map', 'eval'),
    performance: {
      hints: ifProd(true, false),
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
            plugins: ['transform-runtime', 'transform-object-rest-spread'],
          },
        },
        {
          test: /\.css$/,
          include: resolve('src/css'),
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ifProd('css-loader', 'css-loader?sourceMap'),
          }),
        },
      ],
    },
    plugins: removeEmpty([
      new ProgressBarPlugin(),
      ifProd(new OfflinePlugin()),
      new webpack.DefinePlugin({
        'process.env': {
          BROWSER: JSON.stringify(true),
          NODE_ENV: ifProd('"production"', '"development"'),
        },
      }),
      new ExtractTextPlugin(ifProd('styles.[name].[chunkhash].css', 'styles.[name].css')),
      ifProd(new InlineManifestWebpackPlugin()),
      ifProd(new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest'],
      })),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ]),
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
