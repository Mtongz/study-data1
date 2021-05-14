// 生产时依赖
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebpackMerge = require('webpack-merge')
const BaseConfigJs = require('./base.confog')
module.exports = WebpackMerge(BaseConfigJs, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ],
})