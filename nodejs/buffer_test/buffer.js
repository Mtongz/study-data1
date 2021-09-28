/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-10 13:38:25
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-17 16:18:55
 */
let buf1 = Buffer.alloc(10)
// 当赋的值超出255，那么会截取后八位
// buf1[0] = 255 // ff
// buf1[0] = 256 // 00
buf1[0] = 257 // 01
console.log(buf1);
