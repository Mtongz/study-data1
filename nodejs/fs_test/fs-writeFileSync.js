/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 09:58:34
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 10:44:46
 */
const fs = require('fs')

// fs.writeFileSync(path, data[, option])

fs.writeFileSync('test/writehello.txt', 'helloworld', {
  flag: 'a'
})