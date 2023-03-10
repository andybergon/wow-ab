const path = require("path");
const { ESBuildPlugin } = require("esbuild-loader");
const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/rio.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "rio.js",
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "esbuild-loader",
            options: {
              loader: "ts",
              target: "es2015",
            },
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  target: "node",
  plugins: [new ESBuildPlugin(), new EsmWebpackPlugin()],
};
