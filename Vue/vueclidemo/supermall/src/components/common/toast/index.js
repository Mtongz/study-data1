import Toast from './Toast'

const showToast = {}

showToast.install = function (Vue) {
  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)
  // 2.根据构造器new一个组件对象
  const toast = new toastContrustor()
  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))
  // 4.toast.$el 对应的就是div
  document.body.appendChild(toast.$el)
  // 放原型
  Vue.prototype.$toast = toast
}
export default showToast
