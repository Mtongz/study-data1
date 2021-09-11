/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 17:25:27
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 17:29:29
 */
const fs = require('fs')

// fs.mkdir(path[, options], callback)

fs.mkdir('test', (err) => {
  if(err) return err
  console.log('success');
})