/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-13 10:45:25
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-14 10:07:36
 */
const fs = require('fs')

// 写流
// let ws = fs.createWriteStream(path[,option])

let ws = fs.createWriteStream('index.txt', {
  flags: 'w'
})

ws.on('open', function () {
  console.log('文件已打开');
})

ws.on('ready', function () {
  console.log("文件写入已准备");
})

ws.write('helloworld', err => {
  if (err) {
    throw err
  }
  console.log('内容流入完成');
})

ws.end(function () {
  console.log('文件写入结束');
})

ws.on('close', function () {
  console.log('文件关闭');
})