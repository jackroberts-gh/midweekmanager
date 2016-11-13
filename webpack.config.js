var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    vendor: ['jquery', 'angular','angular-route','angular-toggle-switch','arrive']
  },
  output: {
    path: __dirname + '/dist',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
       $: "jquery",
       jQuery: "jquery",
       jquery: "jquery"
     }),
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
  ]
}
