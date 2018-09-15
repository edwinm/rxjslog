const path = require('path');

module.exports = {
  mode: 'development',
  entry: './test/test.js',
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: './test.bundle.js'
  }
};
