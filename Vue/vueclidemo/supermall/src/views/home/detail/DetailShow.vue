<template>
  <div v-if="Object.keys(showData).length !== 0" class="detail-show">
    <div class="show-header clear-fix">
      <div class="start lineBar">
        <i class="dot start-dot"></i>
      </div>
      <div class="show-desc">{{ showData.desc }}</div>
      <div class="end lineBar">
        <i class="dot end-dot"></i>
      </div>
    </div>
    <div v-for="data in showData.detailImage" v-if="data.list">
      <div class="show-keyword">{{ data.key }}</div>
      <div class="show-img">
        <img
          v-for="(itme, index) in data.list"
          :key="index"
          :src="itme"
        />
      </div>
      <!-- <div class="show-keyword">{{ showData.detailImage[0].key }}</div>
      <div class="show-img">
        <img
          v-for="(itme, index) in showData.detailImage[0].list"
          :key="index"
          :src="itme"
        />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShow",
  components: {},
  props: {
    showData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {}
};
</script>
<style scoped lang="scss">
.start {
  float: left;
}
.start-dot {
  left: 0;
}
.show-desc {
  padding: 20px;
}
.end {
  float: right;
}
.end-dot {
  right: 0;
}
.lineBar {
  width: 180px;
  height: 1px;
  background: #a3a3a5;
  position: relative;
}
.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: -2px;
}
.detail-show {
  padding: 10px;
  border-bottom: 5px solid #eee;
}
.show-header {
  padding: 0 15px;
  .show-desc {
    font-size: 12px;
  }
}
.show-keyword {
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
}
.show-img img {
  width: 100%;
}
</style>
