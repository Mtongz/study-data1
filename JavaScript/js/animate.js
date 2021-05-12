function animate(obj, target, callback) {
  clearInterval(obj.timer) //解决在有触发条件下开多个定时器的bug
  obj.timer = setInterval(function () {
    // 步长公式：(目标值-现在的位置)/10  写在定时器里面
    var step = (target - obj.offsetLeft) / 10
    step = step > 0 ? Math.ceil(step) : Math.floor(step)
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)
      if (callback) {
        callback()
      }
    }

    obj.style.left = obj.offsetLeft + step + 'px'
  }, 15)
}