// import path from 'path'
const path = require('path') //node 的path
module.exports = {
  entry: './src/index.js', //输入的位置
  //输出的位置    __dirname 是改文件的当前路径  path.resolve(参数一，参数二) 表示拼接  参数二是
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'dist/'
  },
  module: {
    rules: [{
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/i,
        loader: [
          // compiles Less to CSS
          "style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 3000000,
            //普通写法
            // name: 'imgs/[name].[hash:8].[ext]'  
            //用outputPath的写法
            name: '[name].[hash:4].[ext]',
            outputPath: 'imgs/'
          },
        }, ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ],
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}