const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const injectIndex = new HtmlWebpackPlugin({
  filename: 'index.html',
  inject: 'body',
})

const extensions = [ '.js', '.jsx', '.json' ]

module.exports = {
  entry: [ path.resolve(__dirname, 'app/index.js') ],
  resolve: { extensions },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: [ 'babel-loader?presets[]=react,presets[]=es2015' ],
      }
    ]
  },
  plugins: [ injectIndex ],
}