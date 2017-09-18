module.exports = {
  entry: [
    "babel-polyfill", './src/js/app.js',    
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" }
    ]
  }
};
