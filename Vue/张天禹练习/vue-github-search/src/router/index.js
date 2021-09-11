/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-25 11:02:45
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-25 11:12:57
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
