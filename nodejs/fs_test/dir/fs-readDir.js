/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 13:53:06
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-11 09:37:37
 */

/**
 * 在foreach中使用async await 不起作用，可以用for of 或者 for 代替
 */
const fs = require('fs')
const {
  fsWrite,
  fsRead
} = require('../lcfs')

// fs.readdir(path[, options], callback)

fs.readdir('../test', async (err, files) => {
  if (err) return err
  // files.forEach(async filename => {
  //   const content = await fsRead('../test/' + filename)
  //   await fsWrite('../test/mixin.txt', content)
  // })
  for(let filename of files) {
    const content = await fsRead('../test/' + filename)
    await fsWrite('../test/mixin.txt', content)
  }
})