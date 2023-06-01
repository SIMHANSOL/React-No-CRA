import HtmlWebpackPlugin from "html-webpack-plugin";
import { CleanWebpackPlugin } from "clean-webpack-plugin";
import path from "path";

export default () => {
  const __dirname = path.resolve();

  return {
    mode: process.env.mode,
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[hash].js",
      publicPath: "/",
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: "/node_modules/",
          loader: "babel-loader",
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: "/node_modules/",
          loader: "ts-loader",
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: "style-loader",
            },
            {
              loader: "css-loader",
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./public/index.html",
      }),
    ],
    devServer: {
      host: "localhost",
      port: 3000,
      hot: true,
      open: true,
    },
  };
};
