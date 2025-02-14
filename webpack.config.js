const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/scripts/index.js",
  output: {
    path: path.resolve(__dirname, "docs"),
    filename: "./scripts/app.bundle.js",
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "css/main.css",
    }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img/", to: "./img" },
        { from: "./src/svg/", to: "./svg" },
        { from: "./src/video", to: "./video" },
        { from: "./src/styles/normolize.css", to: "./css" },
      ],
    }),
  ],
};
