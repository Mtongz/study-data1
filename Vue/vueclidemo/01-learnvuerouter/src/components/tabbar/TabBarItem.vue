<template>
  <div class="tabbar-item">
    <div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
    <div v-else><slot name="tabbar-icon-active"></slot></div>
    <div :class="{ active: isActive }"><slot name="tabbar-text"></slot></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isActive: false
    };
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.tabbar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
}
.tabbar-item img {
  width: 24px;
  height: 24px;
  vertical-align: middle;
}
.active {
  color: #ff5777;
}
</style>
