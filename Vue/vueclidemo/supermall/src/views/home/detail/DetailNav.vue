<template>
  <div>
    <nav-bar class="nav">
      <div slot="left" class="nav-left" @click="goBack">
        <img src="~assets/img/common/back.svg" alt="" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item, index) in title"
          :class="{ active: currentIndex === index }"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    }
  },
  mounted() {}
};
</script>
<style scoped>
.nav-left {
  width: 100%;
}
.nav-left img {
  vertical-align: middle;
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
</style>
