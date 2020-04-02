const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const  MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  mode: 'development',
  entry: { 
    app: path.resolve(__dirname, './src/index.js'),
    data: path.resolve(__dirname, './src-data/data.js')
  },
  output: {
    filename: '[name]/[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }]
  },
  plugins: [
     new htmlPlugin({ chunks: ['app'], filename: 'app/index.html', template: path.resolve(__dirname, './src/index.html')}),
     new htmlPlugin({ chunks: ['data'], filename: 'data/index.html', template: path.resolve(__dirname, './src-data/index.html')}),
     new CleanWebpackPlugin(),
     new MiniCssExtractPlugin({
       chunkFilename: '[id].css',
       filename: '[name]/[name].[hash].css'
     })
  ],
  optimization:{
    splitChunks:{
      chunks:'all',
      automaticNameDelimiter: '-',
      cacheGroups:{
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          // name: 'app-vendor',
          /* test(module, chunks) {
            console.log('mmmm', module)
            console.log('cccc' ,chunks)
          }, */
          chunks(chunk) {
            return chunk.name === 'app'
          },
        },
        vendor1: {
          test: /[\\/]node_modules[\\/]/,
          /* test(module, chunks) {
            console.log('mmmm', module)
            console.log('cccc' ,chunks)
          }, */
          // name: 'data-vendor',
          chunks(chunk) {
            return chunk.name === 'data'
          },
        },
      }
    }
  }
}
