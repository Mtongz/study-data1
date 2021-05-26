<template>
  <div id="detail">
    <detail-nav class="detail-nav"></detail-nav>

    <d-scroll class="detail-scroll">
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <detail-desc :detail-infos="detailInfos"></detail-desc>
      <detail-shop :shop-info-data="shopInfoData"></detail-shop>
      <detail-show :show-data="showData"></detail-show>
      <detail-params :goods-params="goodsParams"></detail-params>
      <detail-comment :detail-comment="detailComment"></detail-comment>
    </d-scroll>
  </div>
</template>

<script>
import DScroll from "components/common/scroll/Bscroll";

import DetailNav from "./DetailNav"; //导航栏
import DetailSwiper from "./DetailSwiper"; //轮播图
import DetailDesc from "./DetailDesc"; // 商品信息
import DetailShop from "./DetailShop"; //店铺信息
import DetailShow from "./DetailShow"; //模特展示
import DetailParams from "./DetailParams"; //产品参数
import DetailComment from "./DetailComment"; // 评论展示

import {
  detailData,
  DetailInfos,
  ShopInfo,
  shopGoodsParams
} from "network/apis/home";
export default {
  name: "Detail",
  components: {
    DScroll,

    DetailNav,
    DetailSwiper,
    DetailDesc,
    DetailShop,
    DetailShow,
    DetailParams,
    DetailComment
  },
  data() {
    return {
      id: null,
      swiperImg: [],
      detailInfos: {},
      shopInfoData: {},
      showData: {},
      goodsParams: {},
      detailComment: {}
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
        console.log(detailData);
        // 轮播图
        this.swiperImg = detailData.itemInfo.topImages;
        // 商品描述
        this.detailInfos = new DetailInfos(
          detailData.itemInfo,
          detailData.columns,
          detailData.shopInfo.services
        );
        // console.log(this.detailInfos);
        // 商家信息
        this.shopInfoData = new ShopInfo(detailData.shopInfo);
        // console.log(this.shopInfoData);

        // 模特 展示信息
        this.showData = detailData.detailInfo;
        // console.log(this.showData);

        // 商品参数
        this.goodsParams = new shopGoodsParams(
          detailData.itemParams.info,
          detailData.itemParams.rule
        );
        // console.log(this.goodsParams);

        // 评论
        this.detailComment = detailData.rate;
        console.log(this.detailComment);
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
.detail-scroll {
  height: calc(100% - 44px);
}
</style>
