/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-09-14 16:12:41
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-17 14:48:12
 */
const fs = require('fs')

fs.readFile('index.txt', (err, data) => {
  if (err) throw err
  console.log(data);
  mEvents.emit('fileSuccess', data)
  /**
   * 1吃饭
   * 2睡觉
   * 3打豆豆
   */
})

mEvents.on('fileSuccess', function (eventMsg) {
  console.log('1吃饭');
  console.log(eventMsg);
})
mEvents.on('fileSuccess', function (eventMsg) {
  console.log('2睡觉');
  console.log('2.1喝奶茶');
})
mEvents.on('fileSuccess', function (eventMsg) {
  console.log('3打豆豆');
})

const mEvents = {
  event: {
    // fileSuccess: []
  },
  on: function (eventName, eventFn) {
    if (this.event[eventName]) {
      this.event[eventName].push(eventFn)
    } else {
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  emit: function (eventName, eventMsg) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(itemFn => {
        itemFn(eventMsg)
      });
    }
  }
}