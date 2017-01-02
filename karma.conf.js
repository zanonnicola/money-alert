// const webpack = require('webpack');

module.exports = (config) => {
  config.set({
    browsers: process.env.TRAVIS ? ['Chrome_travis_ci'] : ['Chrome'], // run in Chrome
    singleRun: true, // just run once by default
    frameworks: ['mocha', 'chai'], // use the mocha test framework
    files: [
      'tests.webpack.js', // just load this file
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap'], // preprocess with webpack and our sourcemap loader
    },
    reporters: ['progress', 'coverage', 'coveralls'],
    webpack: { // kind of a copy of your webpack config
      devtool: 'inline-source-map', // just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' },
        ],
      },
    },
    coverageReporter: {
      check: {
        global: {
          statements: 11,
          branches: 0,
          functions: 0,
          lines: 11,
        },
      },
      reporters: [
        { type: 'lcov', dir: 'coverage/', subdir: '.' },
        { type: 'json', dir: 'coverage/', subdir: '.' },
        { type: 'text-summary' },
      ],
    },
    webpackMiddleware: { noInfo: true },
    colors: true,
    concurrency: Infinity,
    logLevel: config.LOG_DEBUG,
  });
};
