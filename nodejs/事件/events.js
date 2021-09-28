/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-15 13:48:36
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-17 16:56:56
 */
const events = require('events')
const fs = require('fs')

let myEvent = new events.EventEmitter

myEvent.on('action', function (data) {
  console.log('打代码');
  console.log(data);
})

myEvent.on('action', function (data) {
  console.log('打豆豆');
  console.log(data + 1);
})
myEvent.on('action', function (data) {

})

function rfPromise(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, {
      encoding: 'utf8'
    }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

rfPromise('index.txt').then(res => {
  myEvent.emit('action', res)
  // console.log(res);
})

async function rfAsync() {
  let data = await rfPromise('index.txt')
  myEvent.emit('action', data)
}
rfAsync()