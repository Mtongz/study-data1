/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-09 15:49:51
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 10:38:30
 */
const fs = require('fs')

// fs.readFile(path[, option], callback)

function fsRead(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, {
      flag: 'r',
      encoding: 'utf-8'
    }, function (err, data) {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

// console.log(fsRead('hello.txt').then(res => console.log(res)));

async function readList() {
  let file2 = await fsRead('test/hello.txt')
  console.log(file2);
  let file3 = await fsRead('test/' + file2 + '.txt')
  console.log(file3);
  let fileContent = await fsRead('test/' + file3 + '.txt')
  console.log(fileContent);
}
readList()