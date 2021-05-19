import Vue from 'vue'
import App from './App'
import router from './router'
// import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

// axios.defaults.baseURL='http://152.136.185.210:7878/api/m5/'

// axios.get('home/multidata').then(res => {
//   const data = res.data.data
//   console.log(data);
// })
// // axios.get('http://123.207.32.32:8000/home/data?type=pop&page=1').then(res => {
// //   const data = res
// //   console.log(data);
// // })
// axios.get('home/data', {
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   const data = res
//   console.log(data);
// })
