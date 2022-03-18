const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const pluginsList = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
];

module.exports = {
  devtool: "source-map",
  plugins: pluginsList,
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "build"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".json", ".css", ".scss"],
  },
  devServer: {
    historyApiFallback: true,
    hot: true,

    proxy: {
      "/api": "http://localhost:8000",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/typescript",
              "@babel/preset-env",
              "@babel/preset-react",
            ],
            plugins: [
              "@babel/proposal-class-properties",
              "@babel/proposal-object-rest-spread",
            ],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(jpg|png|svg)$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 8192,
          },
        },
      },
    ],
  },
};
