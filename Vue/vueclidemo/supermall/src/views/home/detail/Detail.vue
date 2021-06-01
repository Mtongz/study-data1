<template>
  <div id="detail" class="layout">
    <detail-nav
      class="detail-nav layout"
      @navIndex="navHandleClick"
      ref="detailnav"
    ></detail-nav>

    <d-scroll
      class="detail-scroll"
      ref="scroll"
      :probe-type="3"
      @scroll="navScroll"
    >
      <detail-swiper :swiper-img="swiperImg"></detail-swiper>
      <detail-desc :detail-infos="detailInfos"></detail-desc>
      <detail-shop :shop-info-data="shopInfoData"></detail-shop>
      <detail-show :show-data="showData" @imgLoad="imgLoad"></detail-show>
      <detail-params :goods-params="goodsParams" ref="params"></detail-params>
      <detail-comment
        :detail-comment="detailComment"
        ref="comment"
      ></detail-comment>
      <goods-list :goods="recommendList" ref="recommend"></goods-list>
    </d-scroll>
    <detail-tab-bar class="layout" @addCart="addToCart"></detail-tab-bar>

    <back-top @click.native="backTopClick" v-show="isTopShow"></back-top>
  </div>
</template>

<script>
import DScroll from "components/common/scroll/Bscroll";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import DetailNav from "./DetailNav"; //导航栏
import DetailSwiper from "./DetailSwiper"; //轮播图
import DetailDesc from "./DetailDesc"; // 商品信息
import DetailShop from "./DetailShop"; //店铺信息
import DetailShow from "./DetailShow"; //模特展示
import DetailParams from "./DetailParams"; //产品参数
import DetailComment from "./DetailComment"; // 评论展示
import DetailTabBar from "./DetailTabBar"; // 底部功能栏

import {
  detailData,
  recommendData,
  DetailInfos,
  ShopInfo,
  shopGoodsParams
} from "network/apis/home";

import { mapActions } from "vuex";
export default {
  name: "Detail",
  components: {
    DScroll,
    GoodsList,
    BackTop,

    DetailNav,
    DetailSwiper,
    DetailDesc,
    DetailShop,
    DetailShow,
    DetailParams,
    DetailComment,
    DetailTabBar
  },
  data() {
    return {
      id: null,
      swiperImg: [],
      detailInfos: {},
      shopInfoData: {},
      showData: {},
      goodsParams: {},
      detailComment: {},
      recommendList: [],
      titleOffsetTop: [0],
      getTitleOffsetTop: null,
      currentIndex: 0,
      isTopShow: false,
      detailDatas: []
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDetailData(this.id);
    this.getRecommendData();
    // 防抖
    this.getTitleOffsetTop = this.$utils.debounce(() => {
      this.titleOffsetTop = [0];
      this.titleOffsetTop.push(this.$refs.params.$el.offsetTop);
      this.titleOffsetTop.push(this.$refs.comment.$el.offsetTop);
      this.titleOffsetTop.push(this.$refs.recommend.$el.offsetTop);
    }, 500);
  },
  updated() {
    // 很奇怪  要这里调用才能实现该功能
    this.getTitleOffsetTop();
  },
  computed: {},
  methods: {
    ...mapActions(["changeCartList"]),
    getDetailData(id) {
      detailData(id).then(res => {
        const detailData = res.result;
        this.detailDatas = detailData;
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
        // console.log(this.detailComment);
      });
    },
    getRecommendData() {
      recommendData().then(res => {
        // console.log(res);
        this.recommendList = res.data.list;
        // console.log(this.recommendList);
      });
    },
    // goosListItem组件 图片加载完成执行
    imgLoad() {
      this.$refs.scroll.refresh();
      this.getTitleOffsetTop();
    },
    // 实现nav点击相应选项 scroll下滑相应位置
    navHandleClick(index) {
      console.log(index);
      this.$refs.scroll.scrollBack(0, -this.titleOffsetTop[index]);
    },
    navScroll(position) {
      /* 实现scroll下滑到相应位置nav对应高亮
       *position.y的值为负，将其改为正值容易计算
       *positionY 0 - 500 currentIndex 0
       *positionY =500 - 1000 currentIndex 1
       *positionY =1000 - 1500 currentIndex 2
       *positionY >= 1500 currentIndex 3
       */
      const positionY = -position.y;
      // this.titleOffsetTop   //[0,500,1000,1500]
      // this.currentIndex !== i是为了防止赋值过于频繁优化性能
      let length = this.titleOffsetTop.length;
      for (let i in this.titleOffsetTop) {
        i = Number(i);
        if (
          this.currentIndex !== i &&
          ((i < length - 1 &&
            positionY >= this.titleOffsetTop[i] &&
            positionY < this.titleOffsetTop[i + 1]) ||
            (i === length - 1 && positionY >= this.titleOffsetTop[i]))
        ) {
          this.currentIndex = i;
          this.$refs.detailnav.currentIndex = this.currentIndex;
        }
      }
      // 监听滚动  是否显示返回顶部
      this.isTopShow = position.y < -1000;
    },
    backTopClick() {
      this.$refs.scroll.scrollBack(0, 0);
    },
    addToCart() {
      const product = {};
      console.log(this.detailDatas.itemInfo);
      product.id = this.detailDatas.itemInfo.iid;
      product.price = this.detailDatas.itemInfo.lowNowPrice;
      product.image = this.detailDatas.itemInfo.topImages[0];
      product.count = this.detailDatas.itemInfo.cartNum;
      product.title = this.detailDatas.itemInfo.title;
      product.desc = this.detailDatas.itemInfo.desc;

      // this.$store.dispatch("changeCartList", product).then(res => {
      //   console.log(res);
      // })
      this.changeCartList(product).then(res => {
        this.$toast.show(res);
      });
    }
  },
  mounted() {}
};
</script>
<style scoped>
.layout {
  z-index: 1;
  background-color: #fff;
}
#detail {
  position: relative;
  height: 100vh;
}
.detail-nav {
  position: relative;
}
.detail-scroll {
  /* height: calc(100% - 93px); */
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
.detail-tabbar {
  position: absolute;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  height: 49px;
  background: #fff;
  box-shadow: 0 1px 5px rgba(100, 100, 100, 0.2);
}
</style>
