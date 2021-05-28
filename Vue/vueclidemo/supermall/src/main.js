import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




import utils from 'common/utils'
Vue.prototype.$utils = utils;


Vue.prototype.$bus = new Vue();//添加事件总线对象
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
