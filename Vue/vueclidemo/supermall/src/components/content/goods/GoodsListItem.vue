<template>
  <div class="goods-item">
    <div class="item-link" @click="goDetail">
      <img class="item-img" :src="getImages" @load="imgLoad" />
    </div>
    <div class="item-info">
      <p :title="goodsItem.title">{{ goodsItem.title }}</p>
      <div class="item-txt">
        <span class="price">{{ goodsItem.price | rmb(goodsItem.price) }}</span>
        <span class="fav">{{ goodsItem.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  components: {},
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    getImages() {
      return (
        this.goodsItem.image || this.goodsItem.img || this.goodsItem.show.img
      );
    }
  },
  filters: {
    rmb(price) {
      return "￥" + price;
    }
  },
  methods: {
    imgLoad() {
      this.$bus.$emit('imgLoad')
    },
    goDetail() {
      const iid = this.goodsItem.iid || this.goodsItem.item_id;
      this.$router.push("/detail/" + iid);
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
.goods-item {
  width: 48%;
  .item-link {
    display: inline-block;
    width: 100%;
    .item-img {
      width: 100%;
      vertical-align: middle;
      border-radius: 4px;
    }
  }
  .item-info {
    font-size: 14px;
    margin: 4px 0 10px;
    z-index: 1;
    p {
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      margin-bottom: 8px;
    }
    .item-txt {
      display: flex;
      justify-content: space-between;
      padding: 0 2px;
      .price {
        color: var(--color-high-text);
      }
      .fav {
        position: relative;
        &::before {
          content: "";
          position: absolute;
          top: 2px;
          left: -14px;
          width: 14px;
          height: 14px;
          background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
        }
      }
    }
  }
}
</style>
