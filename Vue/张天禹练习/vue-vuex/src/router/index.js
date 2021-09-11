/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-28 16:08:35
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-28 16:50:37
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
