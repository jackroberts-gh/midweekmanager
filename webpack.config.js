var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    vendor: __dirname + "/vendor.js",
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ],
  resolve: {
      alias: {
          jquery: path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.min.js'),
          material: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design', 'dist', 'js', 'material.min.js'),
          ripples: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design', 'dist', 'js', 'ripples.min.js'),
          homepage: path.resolve(__dirname, 'dist', 'homepage.css'),
      },
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
          'node_modules'
        ]  
  },
  module: {
    loaders: [
        {
          test: /\.css$/, loader: "style-loader!css-loader"
        }
    ]
  }
}
