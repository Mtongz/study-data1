/*
 * @Description: 优化readandwrite版
 * @Autor: Tong
 * @Date: 2021-09-14 14:41:22
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-14 14:44:25
 */

const fs = require('fs')

let rs = fs.createReadStream('index.txt', {
  flags: 'r'
})
let ws = fs.createWriteStream('a.txt', {
  flags: 'w'
})


rs.on('open', function () {
  console.log('读取文件打开');
})

rs.pipe(ws)

rs.on('close', function () {
  console.log('读取文件关闭');
})