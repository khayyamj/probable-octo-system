var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var isProd = process.env.NODE_ENV === "production"; // true or false
var cssDev = ['style-loader','css-loader','sass-loader'];
var cssProd = ExtractTextPlugin.extract({
      fallback: "style-loader",
      use: ["css-loader", "sass-loader"],
      publicPath: "/dist"
    });
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: cssConfig
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: 'file-loader?images/name=[name].[ext]&outputPath=images/'
      },
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    // port: 9000,
    hot: true,
    stats: "errors-only",
    open: true
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "app.css",
      disable: !isProd
    }),
    new HtmlWebpackPlugin({
      title: 'Octo-System',
      // minify: {
      //   collapseWhitespace: true
      // },
      hash: true,
      template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
