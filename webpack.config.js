const globEntries = require('webpack-glob-entries');

module.exports = {
  entry: globEntries('./src/**/*.js'),
  output: {
      path: `${__dirname}/dist`,
      filename: '[name].js',
      library: '[name]',
      libraryTarget: 'umd'
  },
  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          loader: 'babel',
          query: {
            presets: ['es2015'],
            plugins: [
              'add-module-exports'
            ]
          }
        }
      ]
  }
};