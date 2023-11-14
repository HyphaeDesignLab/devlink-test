var path = require('path');
var SRC_DIR = path.join(__dirname, './src');
var DIST_DIR = path.join(__dirname, './public/');

module.exports = {

  /*
    EDIT: may eventally get rid of all the test files, but might be better to have different build commands to build different tests instead of build all in one command in the long run
  */
  entry: {
    'app':  { import: `${SRC_DIR}/index.jsx`, filename: `app.bundle.js` }
  },
  output: {
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        include: SRC_DIR,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
       }
      }, {
        test: /\.ts$/, // Apply the loader to TypeScript files
        use: 'ts-loader',
        exclude: /node_modules/,
      }, {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ]
  }
};