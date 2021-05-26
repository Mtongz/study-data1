<template>
  <div class="detail-info" v-if="Object.keys(detailInfos).length !== 0">
    <div class="detail-title">{{ detailInfos.title }}</div>
    <div class="detail-price">
      <span class="lowNowPrice">￥{{ detailInfos.lowNowPrice }}</span>
      <span class="oldPrice">{{ detailInfos.oldPrice }}</span>
      <span
        class="discountDesc"
        :style="{ backgroundColor: detailInfos.discountBgColor }"
        v-if="detailInfos.discountDesc"
        >{{ detailInfos.discountDesc }}</span
      >
    </div>
    <div class="detail-extra">
      <span>{{ detailInfos.columns[0] }}</span>
      <span>{{ detailInfos.columns[1] }}</span>
      <span>{{
        detailInfos.services[detailInfos.services.length - 1].name
      }}</span>
    </div>
    <div class="detail-service">
      <span
        class="service-item"
        v-for="index in detailInfos.services.length - 1"
        :key="index"
      >
        <img
          class="service-icon"
          :src="detailInfos.services[index - 1].icon"
          v-if="detailInfos.services[index - 1].icon"
        />
        <span>{{ detailInfos.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    detailInfos: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail-info {
  padding: 10px;
  font-size: 14px;
  border-bottom: 4px solid #eee;
}
.detail-title {
  font-size: 18px;
  overflow: hidden;
  text-overflow: ellipsis;
  /* 弹性伸缩盒子模型显示 */
  display: -webkit-box;
  /* 限制在一个块元素显示的文本的行数 */
  -webkit-line-clamp: 2;
  /* 设置或检索伸缩盒对象的子元素的排列方式 */
  -webkit-box-orient: vertical;
}
.detail-price {
  margin: 10px 0;
  .lowNowPrice {
    font-size: 20px;
    color: var(--color-high-text);
  }
  .oldPrice {
    font-size: 13px;
    text-decoration: line-through;
    margin: 0 5px;
  }
  .discountDesc {
    font-size: 12px;
    color: #fff;
    border-radius: 5px;
    padding: 5px;
  }
}
.detail-extra {
  display: flex;
  justify-content: space-between;
  padding: 5px;
  color: #aaa;
  border-bottom: 2px solid #eee;
}
.detail-service {
  display: flex;
  justify-content: space-between;
  padding: 20px 5px;
  font-size: 12px;
  color: 333;
  .service-item {
    .service-icon {
      width: 11px;
      height: 11px;
    }
  }
}
</style>
