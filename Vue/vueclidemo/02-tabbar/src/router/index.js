import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Home = () => import('views/home/Home')
const Categroy = () => import('views/categroy/Categroy')
const Cart = () => import('views/cart/Cart')
const Profile = () => import('views/profile/Profile')




const routes = [{
  path: '/',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/categroy',
  component: Categroy
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}, ]





export default new Router({
  routes,
  mode: 'history'
})
