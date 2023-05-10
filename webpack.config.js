const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const Dotenv = require("dotenv-webpack");

const production = process.env.NODE_ENV === "production";

module.exports = (env) => {
  return {
    entry: { myAppName: path.resolve(__dirname, "./src/index.js") },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: production ? "[name].[contenthash].js" : "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: [
            production ? MiniCssExtractPlugin.loader : "style-loader",
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: !production,
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|svg)/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      alias: {
        "@assets": path.resolve(__dirname, "./src/assets"),
        "@components": path.resolve(__dirname, "./src/components"),
        "@constants": path.resolve(__dirname, "./src/constants"),
        "@pages": path.resolve(__dirname, "./src/pages"),
        "@src": path.resolve(__dirname, "./src"),
        "@utils": path.resolve(__dirname, "./src/utils"),
      },
    },
    plugins: [
      new CleanWebpackPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new HtmlWebpackPlugin({
        title: "Webpack & React",
        template: "./public/index.html",
        favicon: "./public/favicon.ico",
      }),
      new MiniCssExtractPlugin({
        filename: production ? "[name].[contenthash].css" : "[name].css",
      }),
      new Dotenv({
        path: `./.env${env.file ? `.${env.file}` : ""}`,
      }),
    ],
    devServer: {
      historyApiFallback: true,
      port: 3000,
      hot: true,
      open: true,
    },
    mode: production ? "production" : "development",
  };
};
