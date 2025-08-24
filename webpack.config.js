import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CopyPlugin from "copy-webpack-plugin";

export default {
  mode: "production",
  entry: "./src/scripts/index.ts",
  output: {
    path: path.resolve(process.cwd(), "docs"),
    filename: "./scripts/app.bundle.js",
    assetModuleFilename: "img/[name][ext]",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
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
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/index.html" }),
    new MiniCssExtractPlugin({ filename: "css/main.css" }),
    new CopyPlugin({
      patterns: [
        { from: "./src/img/", to: "./img" },
        { from: "./src/svg/", to: "./svg" },
        { from: "./src/video", to: "./video" },
        { from: "./src/styles/normolize.css", to: "./css" },
      ],
    }),
  ],
  devServer: {
    static: "./docs",
    hot: true,
    port: 3000,
  },
  performance: {
    hints: false,
  },
};
