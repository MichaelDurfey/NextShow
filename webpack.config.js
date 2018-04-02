const path = require('path');

const OUT_DIR = path.join(__dirname, '/dist');
const SRC_DIR = path.join(__dirname, '/src');
module.exports = {
  entry: path.join(SRC_DIR, '/render.jsx'),
  output: {
    path: OUT_DIR,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  node: {
    fs: 'empty',
  },
};
