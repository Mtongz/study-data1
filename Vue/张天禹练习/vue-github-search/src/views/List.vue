<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-25 11:02:45
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-28 14:41:14
-->
<template>
  <div class="row">
    <h3 v-show="listInfo.isFirst">欢迎使用</h3>
    <h3 v-show="listInfo.isLoding">正在加载...</h3>
    <h3 v-show="listInfo.errorMsg">{{ listInfo.errorMsg }}</h3>
    <div
      class="card"
      v-show="listInfo.users.length"
      v-for="item in listInfo.users"
      :key="item.id"
    >
      <a :href="item.html_url" target="_blank">
        <img :src="item.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{ item.login }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      listInfo: {
        users: [],
        isFirst: true,
        isLoding: false,
        errorMsg: "",
      },
    };
  },
  mounted() {
    //组件一挂载就绑定事件
    // this.$bus.$on("get-data", this.saveData)

    //组件一挂载就订阅消息
    this.token = PubSub.subscribe("get-data", this.saveData);
  },
  beforeDestroy() {
    //组件销毁前取消绑定事件
    // this.$bus.$off('get-data')

    //组件销毁前取消订阅
    PubSub.unsubscribe(this.token);
  },
  methods: {
    saveData(_,data) {
      this.listInfo = { ...this.listInfo, ...data };
    },
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
