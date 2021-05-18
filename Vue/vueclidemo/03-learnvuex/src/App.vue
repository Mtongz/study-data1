<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <h3>----------------hellovuex页面----------</h3>
    <hello-vuex />
    <h3>----------------vuex页面----------</h3>
    <Vuex />
  </div>
</template>

<script>
import HelloVuex from 'views/vuexbase/Hellovuex'
import Vuex from 'views/vuexbase/Vuex'
export default {
  name: 'App',
  components:{
    HelloVuex,
    Vuex
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
