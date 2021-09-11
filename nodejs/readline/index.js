/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-11 13:47:25
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-11 15:31:37
 */

const readline = require('readline')
const {
  fsWrite
} = require('../fs_test/lcfs')

/**使用
 * const readline = require('readline');
 * 实例化
 * const rl = readline.createInterface({
 *   input: process.stdin,
 *   output: process.stdout
 * });
// 设置提问事件
 * rl.question('What do you think of Node.js? ', (answer) => {
 *   // TODO：记录答案到数据库中
 *   console.log(`Thank you for your valuable feedback: ${answer}`);
 *   rl.close();
 * });
 * rl.on('line', (input) => {
 *   console.log(`Received: ${input}`);
 *   process.exit(0)
 * });
 */

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// r1.question('what you product name?', answer => {

// })

function mQuestion(problem) {
  return new Promise(function (resolve, reject) {
    r1.question(problem, answer => {
      resolve(answer)
    })
  })
}

async function createPackage() {
  let name = await mQuestion('what your project name?  ')
  let desc = await mQuestion('what your project description?  ')
  let main = await mQuestion('what your project main?  ')
  let author = await mQuestion('what your project author?  ')
  let content = `
    {
      "name": "${name}",
      "description": "${desc}",
      "main": "${main}",
      "author": "${author}"
    }
  `
  await fsWrite('package.json', content)
  // 最终写完内容关闭进程
  r1.close()
}

createPackage()

r1.on('close', () => {
  console.log(`success`);
  process.exit(0)
});