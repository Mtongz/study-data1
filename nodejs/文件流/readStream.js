/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-13 10:44:58
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-14 16:12:09
 */

const fs = require('fs')

let rs = fs.createReadStream('index.txt', {
  flags: 'r'
})

rs.on('open', function () {
  console.log('读取文件打开');
})
// 每次读流完成
rs.on('data', function (chunk) {
  console.log('数据流入', chunk.toString(), chunk.length);
})

rs.on('close', function () {
  console.log('读取文件关闭');
})