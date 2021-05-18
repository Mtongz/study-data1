import Vue from 'vue'
import vueRouter from 'vue-router'

// import Home from '../components/Home.vue'
const Home = () => import( /* webpackChunkName: "Home" */ '../components/Home')
const HomeNews = () => import('../components/HomeNews')
const HomeMessage = () => import('../components/HomeNewsMessage')

const About = () => import( /* webpackChunkName: "About" */ '../components/About')
const User = () => import( /* webpackChunkName: "User" */ '../components/User')
const ProFile = () => import('../components/proFile.vue')








// 1.通过vue安装插件vuerouter
Vue.use(vueRouter)
// 2.创建vueRouter对象,因为有很多的对象，所以用对象数组存放
const routes = [{
  path: '',
  redirect: '/Home'
}, {
  path: '/Home',
  component: Home,
  meta: {
    title: '首页'
  },
  children: [{
    path: '',
    redirect: 'HomeNews'
  }, {
    path: 'HomeNews',
    component: HomeNews,
  }, {
    path: 'HomeMessage',
    component: HomeMessage,
  }]
}, {
  path: '/About',
  component: About,
  meta: {
    title: '关于'
  },
}, {
  path: '/User/:userId',
  component: User,
  meta: {
    title: '用户'
  },
}, {
  path: '/proFile',
  component: ProFile,
  meta: {
    title: '档案'
  },
}]

const router = new vueRouter({
  routes,
  mode: 'history'
})
// 导航守卫  
// 前置守卫
router.beforeEach((to, from, next) => {
  // 从from跳转到to
  // 1.设置每个页面的title
  console.log(to);
  document.title = to.matched[0].meta.title
  next()
})
// 后置钩子(hook)  
router.afterEach((to, from) => {

})



// 3.将router对象传到vue实例
export default router
