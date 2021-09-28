/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-24 15:38:27
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-28 16:37:40
 */
const axios = require('axios')
const cheerio = require('cheerio')
const fs = require('fs')
const path = require('path')

let emojUrl = 'https://www.doutula.com/article/list/?page=1'

// 等待函数
async function mWait(milliseconds) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve()
    }, milliseconds)
  })
}

// 获取页面总数
async function getPageNum() {
  let pageData = await axios.get(emojUrl)
  let $ = cheerio.load(pageData.data)
  let btnLength = $('.pagination .page-item').length
  let totalNum = $('.pagination .page-item').eq(btnLength - 2).find('a').text()
  return totalNum
}
async function getListPage(pageNum) {
  let emojUrl = 'https://www.doutula.com/article/list/?page=' + pageNum
  let res = await axios.get(emojUrl)
  // res.data 就是页面代码
  // console.log(res.data);
  // cheerio解析html
  let $ = cheerio.load(res.data)
  // 获取当前页面所有的表情页面的链接
  $('#home .row .center-wrap>a').each(async (i, element) => {
    let pageUrl = $(element).attr('href')
    let title = $(element).find('.random_title').text()

    // let titleReg = /(.*?)/
    // title = titleReg.exec(title)[1]
    // { recursive: true }  mkdir时根目录未创建会自动创建
    fs.mkdir('./imgs/' + title, {
      recursive: true
    }, function (err) {
      if (err) {
        console.log(title + ' 目录已存在');
        console.log(err);
      } else {
        console.log('成功创建目录: ' + './imgs/' + title);
      }
    })
    await mWait(50 * i)
    parsePageUrl(pageUrl, title)
  })
}

// 根据获取到的url获取该url的内容
async function parsePageUrl(pageUrl, title) {
  let urlData = await axios.get(pageUrl)
  let $ = cheerio.load(urlData.data)
  $('.pic-content .artile_des img').each(async (i, element) => {
    let detailPic = $(element).attr('src')
    // 图片写入的路径和名字
    let picPath = `./imgs/${title}/${title}-${i}${path.extname(detailPic)}`
    let ws = fs.createWriteStream(picPath)
    await axios.get(detailPic, {
      responseType: 'stream'
    }).then((res) => {
      res = res.data
      res.pipe(ws)
      console.log('图片加载完成：' + detailPic);
      res.on('close', async function () {
        ws.close()
      })
    })
  })
}

async function spider() {
  //获取所有的页面总数
  let pageNumTotal = await getPageNum()
  for (let i = 1; i <= pageNumTotal; i++) {
    await mWait(3000 * i)
    getListPage(i)
  }
}
spider()