/*
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-28 16:08:35
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-08 16:24:54
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    num: 0
  },
  actions: {
    jia(context, value) {
      context.commit('JIA', value)
    },
    jian(context, value) {
      context.commit('JIAN', value)
    }
  },
  mutations: {
    JIA(state, value) {
      state.num += value
    },
    JIAN(state, value) {
      state.num -= value
    }
  },
  modules: {}
})