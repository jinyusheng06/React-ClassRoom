let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },
  //可以配置一个源代码到打包后代码的一个映射，可以在控制看到源代码报错的行数而非bundle.js里的行里
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015", "stage-0", "react"]
        },
        exclude: /node_modules/
      },
      {
        test:/\.less$/,
        loaders:["style-loader","css-loader","less-loader"]
      },
      {
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'index.html'
    })
  ]
}