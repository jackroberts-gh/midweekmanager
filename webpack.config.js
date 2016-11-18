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
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } })
  ],
  resolve: {
      alias: {
          jquery: path.resolve(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.js'),
          material: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design', 'dist', 'js', 'material.min.js'),
          ripples: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design', 'dist', 'js', 'ripples.min.js'),
          bootstrap_css: path.resolve(__dirname, 'node_modules', 'bootstrap','dist','css','bootstrap.min.css'),
          materialfullpalette_css: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design','dist','css','material-fullpalette.css'),
          material_css: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design','dist','css','material.min.css'),
          ripples_css: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design','dist','css','ripples.min.css'),
          roboto_css: path.resolve(__dirname, 'node_modules', 'bootstrap-material-design','dist','css','roboto.min.css'),
      },
      extensions: ['', '.js', '.jsx', '.css'],
      modulesDirectories: [
          'node_modules'
        ]
  },
  module: {
    loaders: [
        { test: /\.css$/, loader: "style-loader!css-loader" },
        { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
        { test: /\.styl$/, loader: "style-loader!css-loader!stylus-loader" },
        { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/, query: { presets: ['es2015'] } },
        { test: /\.png$/, loader: "url-loader?limit=100000" },
        { test: /\.jpg$/, loader: "file-loader" },
        { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'},
        { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
        { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
        { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
    ]
  }
}
