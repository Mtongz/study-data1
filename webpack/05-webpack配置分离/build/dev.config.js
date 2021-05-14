//开发时依赖
const WebpackMerge = require('webpack-merge')
const BaseConfigJs = require('./base.confog')
module.exports = WebpackMerge(BaseConfigJs, {
  devServer: {
    contentBase: './dist',
    inline: true
  },
})