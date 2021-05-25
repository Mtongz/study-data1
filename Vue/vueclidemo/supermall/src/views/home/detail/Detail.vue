<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>

    <d-scroll class="detail-scroll">
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <detail-desc :detail-info="detailInfos"></detail-desc>
      <detail-shop :shop-info-data="shopInfoData"></detail-shop>
      <detail-show ></detail-show>

      
    </d-scroll>
  </div>
</template>

<script>
import DScroll from "components/common/scroll/Bscroll";

import DetailNav from "./DetailNav"; //导航栏
import DetailSwiper from "./DetailSwiper"; //轮播图
import DetailDesc from "./DetailDesc";  // 商品信息
import DetailShop from "./DetailShop";  //店铺信息
import DetailShow from './DetailShow'   //模特展示

import { detailData, DetailInfos, ShopInfo } from "network/apis/home";
export default {
  name: "Detail",
  components: {
    DScroll,

    DetailNav,
    DetailSwiper,
    DetailDesc,
    DetailShop,
    DetailShow
  },
  data() {
    return {
      id: null,
      swiperImg: [],
      detailInfos: {},
      shopInfoData: {},
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetailData(this.id);
  },
  methods: {
    getDetailData(id) {
      detailData(id).then(res => {
        const detailData = res.result;
        // 轮播图
        this.swiperImg = detailData.itemInfo.topImages;
        // 商品描述
        this.detailInfos = new DetailInfos(
          detailData.itemInfo,
          detailData.columns,
          detailData.shopInfo.services
        );
        console.log(detailData);
        // 商家信息
        this.shopInfoData = new ShopInfo(detailData.shopInfo);
        // 模特 展示信息
        
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 1;
  height: 100vh;
  background-color: #fff;
}
.detail-nav {
  position: relative;
  z-index: 1;
  background-color: #fff;
}
.detail-scroll{
  height: calc(100% - 44px);
}
</style>
