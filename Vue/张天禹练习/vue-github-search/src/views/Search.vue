<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-25 11:02:45
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-28 13:20:04
-->
<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;<button @click="search">Search</button>
    </div>
  </section>
</template>

<script>
// import axios from 'axios'
export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    async search() {
      // 全局事件总线实现
      // this.$bus.$emit('get-data', { isFirst: false, isLoding: true})

      // 发布订阅实现
      PubSub.publish('get-data', { isFirst: false, isLoding: true})

      
      /**1.普通axios请求 */
      // this.$axios
      //   .get("https://api.github.com/search/users", {
      //     params: { q: this.keyword },
      //   })
      //   .then((result) => {
      //     console.log(result.data);
      //   })
      //   .catch((err) => {
      //     console.log("fail");
      //   });
      /**2.进阶版axios请求 */
      try {
        const res = await this.$axios.get("https://api.github.com/search/users", {
          params: { q: this.keyword },
        });
        const { items } = res.data;
        // this.$bus.$emit('get-data', { isFirst: false, isLoding: false, users: items})
        PubSub.publish('get-data', { isFirst: false, isLoding: false, users: items})
      } catch (error) {
        // this.$bus.$emit('get-data', { isFirst: false, isLoding: false, users: [], errorMsg: error.message})
        PubSub.publish('get-data', { isFirst: false, isLoding: false, users: [], errorMsg: error.message})
      }
    },
  },
};
</script>

<style></style>
