var ExtractTextPlugin = require("extract-text-webpack-plugin");

var cssLoader = require.resolve("css-loader");
var styleLoader = require.resolve("style-loader");
var stylusLoader = require.resolve("stylus-loader");

module.exports = {
  context: __dirname,
  entry: "./entry",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.[hash].js"
  },
  module: {
    loaders: [{ name: "extract",
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract(styleLoader, cssLoader + "!" + stylusLoader)
    }]
  },
  stylus: {
    importsCache: false // makes no difference in this example
  },
  plugins: [
    new ExtractTextPlugin("style.[hash].css")
  ]
};
