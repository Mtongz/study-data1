/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 09:58:23
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 13:08:27
 */
const fs = require('fs')

// fs.writeFile(path, data[, option], callback)
// flag: 'a' 追加    flag: 'w' 写入

fs.writeFile('test/writehello.txt', 'writehello', {
  flag: 'a'
}, err => {
  if (err) {
    console.log('内容添加失败');
  } else {
    console.log('内容添加成功');
  }
})

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

async function writeList() {
  await fsWrite('lc.html', '<h2>老大开飞机</h2>')
  await fsWrite('lc.html', '<h2>老二放炸弹</h2>')  
  await fsWrite('lc.html', '<h2>幸亏老三跑得快</h2>')  
  await fsWrite('lc.html', '<h2>老四炸得稀巴烂</h2>')  
}
writeList()