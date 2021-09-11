/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 13:13:09
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-11 09:33:30
 */

const fs = require('fs')

// fs.unlink(path, callback)

fs.unlink('test/mixin.txt', (err) => {
  if(err) throw err
  console.log('test/writehello.txt was deleted');
})