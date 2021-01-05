module.exports = {
  entry: "./src/js/app.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node modulus/,
        query: { presets: ["es2015"] },
      },
    ],
  },
};
