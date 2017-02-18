// tslint:disable no-var-requires
const path = require('path')

module.exports = {
  entry: {
    'html-to-printer': './lib/index.js',
  },
  output: {
    filename: '[name].js',
    library: 'htmlToPrinter',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
  },
}
