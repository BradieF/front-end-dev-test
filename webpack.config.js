const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  mode: 'development', // Set mode explicitly

  watch: true,

  devServer: {
    static: path.join(__dirname, 'dist'), // updated from contentBase to static
    hot: true, // enable hot reloading
    port: 8080, // specify the port
  },

  module: {
    rules: [
      {
        test: /\.html$/,
        loader: "html-loader",
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: function () {
                  return [require('autoprefixer')];
                },
              },
            },
          },
        ],
      },
    ],
  },
};
