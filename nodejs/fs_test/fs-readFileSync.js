/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-09 15:49:40
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-10 10:37:09
 */
let fs = require('fs')

// fs.readFileSync(path[, option])

let content = fs.readFileSync('test/hello.txt', {flag: 'r', encoding: 'utf-8'})

console.log(content);