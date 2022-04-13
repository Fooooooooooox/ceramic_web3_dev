var webpack = require("webpack");

module.exports = {

  entry: "./lib/index.js",
  devtool: "source-map",
  output: {
    path: "./dist",
    filename: "dis.js"
  }
};