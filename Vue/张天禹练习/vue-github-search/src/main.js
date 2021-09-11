/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-25 11:02:45
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-28 13:18:35
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import PubSub from 'pubsub-js'

Vue.use(PubSub)

Vue.prototype.$axios = axios

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  router,
  store,
  render: h => h(App)
}).$mount('#app')
