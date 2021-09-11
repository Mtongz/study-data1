/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 16:04:31
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 16:05:43
 */
const fs = require('fs')

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

function fsWrite(path, data) {
  return new Promise(function (resolve, reject) {
    fs.writeFile(path, data, {
      flag: 'a'
    }, (err) => {
      if (err) return reject(err)
      resolve(err)
    })
  })
}

module.exports = { fsRead, fsWrite }