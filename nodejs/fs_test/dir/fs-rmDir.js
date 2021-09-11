/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 17:22:27
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 17:31:17
 */
const fs = require('fs')

// fs.rmdir(path, callback)

fs.rmdir('./test', err => {
  if(err) return err
  console.log('success');
})