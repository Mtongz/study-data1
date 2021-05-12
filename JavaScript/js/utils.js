// 获取min-max之间的随机整数Math.random()
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// 若传入的时间小于10则在前面加0
function double(time) {
  return time < 10 ? '0' + time : time;
}