/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 15:39:14
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-25 10:47:19
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false  //关闭生产提示

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
