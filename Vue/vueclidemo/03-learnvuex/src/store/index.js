import Vue from 'vue'
import Vuex from 'vuex'

import getters from './getters'
import actions from './actions'
import mutations from './mutations'
import modules from './modules'

Vue.use(Vuex)
const state = {
  counter: 0
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {
    a: modules.moduleA
  }
})

export default store
