const path = require('path');
const webpack = require('webpack');

const settings = {
  entry: {
    bundle: [
      "react-hot-loader/patch",
      "./src/client/index.js"
    ]
  },
  output: {
    filename: "[name].js",
    publicPath: "/",
    path: path.resolve("build")
  },
  resolve: {
    extensions: [".js", ".json", ".css"]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ["es2015", { modules: false }],
            "stage-2",
            "react"
          ],
          plugins: [
            "transform-node-env-inline",
            "transform-decorators-legacy"
          ],
          env: {
            development: {
              plugins: ["react-hot-loader/babel"]
            }
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[name]--[local]--[hash:base64:8]"
            }
          },
          "postcss-loader" // has separate config, see postcss.config.js nearby
        ]
      },
    ]
  },
  devServer: {
   // host: '0.0.0.0',
    port: 9095,
    contentBase: path.resolve("src/client"),
    publicPath: "http://localhost:9095/", // full URL is necessary for Hot Module Replacement if additional path will be added.
    quiet: false,
    hot: true,
    historyApiFallback: true,
    inline: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
  ],
};

module.exports = settings;