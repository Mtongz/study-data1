/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-14 14:12:41
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-14 14:12:41
 */
const fs = require('fs')

let rc = fs.createReadStream('index.txt', {
  flags: 'r'
})
let ws = fs.createWriteStream('a.txt', {
  flags: 'w'
})


rc.on('open', function () {
  console.log('读取文件打开');
})
// 每次读流完成
rc.on('data', function (chunk) {
  console.log('数据流入', chunk.toString(), chunk.length);
  ws.write(chunk, () => {
    console.log('单批输入流写入完成');
  })
})

rc.on('close', function () {
  ws.end()
  console.log('读取文件关闭');
})