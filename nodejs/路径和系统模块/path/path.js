/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-18 09:22:58
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-24 08:37:32
 */
const path = require('path')
// console.log(path);

let URL = 'https://news.sina.com.cn/c/xl/2021-09-18/doc-iktzqtyt6675328.shtml'

// 取出后缀名  .shtml
let extname = path.extname(URL)
console.log(extname);

// 取出最后
let basename = path.basename(URL)
console.log(basename);

let dirname = path.dirname(URL)
console.log(dirname);

let join = path.join('/foo', 'bar', 'baz/asdf', 'quux');
console.log(join);

let normalize = path.normalize('/foo///sasd/sssad/sadsssss')
console.log(normalize);

// format 与 parse 效果相反
path.format({
  root: '/ignored',
  dir: '/home/user/dir',
  base: 'file.txt'
});
// 返回: '/home/user/dir/file.txt'
path.parse('C:\\path\\dir\\file.txt');
// 返回:
// { root: 'C:\\',
//   dir: 'C:\\path\\dir',
//   base: 'file.txt',
//   ext: '.txt',
//   name: 'file' }

// 提供特定于平台的路径片段分隔符
let sep = path.sep()