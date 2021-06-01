import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入并安装封装的toast组件插件
import toast from 'components/common/toast'
Vue.use(toast)

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad)

import utils from 'common/utils'
Vue.prototype.$utils = utils;


Vue.prototype.$bus = new Vue();//添加事件总线对象
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
