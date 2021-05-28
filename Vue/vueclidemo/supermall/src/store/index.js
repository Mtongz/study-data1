import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    changeCartList(state, payload) {
      console.log(payload);
      console.log(state);
      let oldProduct = state.cartList.find(item => item.id === payload.id)
      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payload.count = 1
        state.cartList.push(payload)
        console.log(state.cartList);
      }
    }
  },
  actions: {},
  modules: {}
})
