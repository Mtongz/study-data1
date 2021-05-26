<template>
  <div class="detail-shop">
    <div class="shop-info">
      <div class="shop-logo">
        <img :src="shopInfoData.avatar" />
      </div>
      <span>{{ shopInfoData.nickName }}</span>
    </div>
    <div class="shop-feature">
      <div class="feature-left">
        <div>
          <div>{{ shopInfoData.sales | sale(shopInfoData.sales) }}</div>
          <div>总销量</div>
        </div>
        <div>
          <div>{{ shopInfoData.goods }}</div>
          <div>全部宝贝</div>
        </div>
      </div>
      <span class="feature-center">
        <div></div>
      </span>
      <div class="feature-right">
        <div v-for="item in shopInfoData.score" class="feature-right-item">
          <span>{{ item.name }}</span>
          <span class="score" :class="{ 'score-better': item.isBetter }">{{
            item.score
          }}</span>
          <span class="better" :class="{ 'better-more': item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-btn">
      <a :href="shopInfoData.shopUrl">
        <button>进店逛逛</button>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShop",
  components: {},
  props: {
    shopInfoData: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  filters: {
    sale(sales) {
      return sales > 10000 ? (sales / 10000).toFixed(1) + "万" : sales;
    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail-shop {
  padding: 20px 10px;
}
.shop-info {
  display: flex;
  align-items: center;
  .shop-logo {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: 1px solid #ccc;
    overflow: hidden;
    margin-right: 10px;
    img {
      width: 100%;
    }
  }
}
.shop-feature {
  margin: 20px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-size: 12px;
  .feature-left {
    flex: 2;
    display: flex;
    justify-content: space-around;
    text-align: center;
    div {
      margin: 4px;
      font-weight: 600;
    }
  }
  .feature-center {
    flex: 1;
    display: flex;
    justify-content: center;
    div {
      width: 1px;
      height: 40px;
      background: #ccc;
    }
  }
  .feature-right {
    flex: 2;
    .feature-right-item {
      display: flex;
      justify-content: space-between;
      margin: 5px 0;
      .score {
        color: #5ea732;
      }
      .score-better {
        color: #f13e3a;
      }
      .better {
        background-color: #5ea732;
        color: #fff;
        text-align: center;
      }
      .better-more {
        background-color: #f13e3a;
      }
    }
  }
}
.shop-btn {
  text-align: center;
  a {
    display: inline-block;
    button {
      border: none;
      padding: 10px 30px;
      border-radius: 10px;
    }
  }
}
</style>
