<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.sort" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style>
.recommend {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 4px 0 10px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  width: 20%;
  text-align: center;
  font-size: 14px;
}
.recommend-item img {
  width: 100%;
  margin-bottom: 4px;
}
</style>
