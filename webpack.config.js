const path = require('path')
const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
  entry: path.join(__dirname, 'src', 'dynamicNextjsRouting.js'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({'process.env.NODE_ENV': 'production'}),
    // new webpack.optimize.UglifyJsPlugin()
  ],
  externals: [
    nodeExternals({
      modulesFromFile: true
    })
]
}
