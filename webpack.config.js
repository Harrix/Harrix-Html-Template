const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    './src/index.js',
    './src/scss/style.scss'
  ],
  output: {
    filename: './dist/bundle.js'
  },
  module: {
    rules: [{
        test: /\.js$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(sass|scss)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        use: ExtractTextPlugin.extract({
          //fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(woff2?|ttf|otf|eot|svg)$/,
        include: [
          path.resolve(__dirname, "src")
        ],
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]',
          outputPath: '.dist/font'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'dist/style.bundle.css',
      allChunks: true,
    }),
  ],
};