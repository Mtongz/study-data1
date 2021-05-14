const {
  add,
  sub
} = require('./js/mathUntils')
import {
  person
} from './js/person'

require('./css/normal.css')
require('./css/font.less')

import Vue from 'vue'

import App from '../App.vue'

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  }
})