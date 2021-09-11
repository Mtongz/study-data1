<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-28 16:08:35
 * @LastEditors: Tong
 * @LastEditTime: 2021-09-08 16:24:08
-->
<template>
  <div class="hello">
    <h3>{{$store.state.num}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increasement">+</button>
    <button @click="decreasement">-</button>
    <button @click="increasementOdd">奇数+</button>
    <button @click="increasementAsync">异步+</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      n: 1
    }
  },
  methods: {
    increasement() {
      this.$store.dispatch('jia', this.n)
    },
    decreasement() {
      // console.log('jian');
      this.$store.dispatch('jian', this.n)
    },
    increasementOdd() {
      
    },
    increasementAsync() {
      
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
