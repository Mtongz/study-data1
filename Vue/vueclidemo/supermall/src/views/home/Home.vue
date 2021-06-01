<template>
  <div class="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      class="tab-control-fixed"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      ref="tabControl2"
      v-show="isFixed"
    ></tab-control>
    <bscroll
      class="home-content"
      ref="scroll"
      :pull-up-load="true"
      :probe-type="3"
      @scroll="scrollPosition"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <Recommend :recommends="recommends"></Recommend>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
        ref="tabControl1"
      ></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </bscroll>
    <back-top @click.native="backTopClick" v-show="isTopShow"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import Bscroll from "components/common/scroll/Bscroll";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./components/HomeSwiper";
import Recommend from "./components/Recommend";
import FeatureView from "./components/FeatureView";

import { getHomeMultidata, getHomeGoods } from "network/apis/home";
export default {
  name: "Home",
  components: {
    NavBar,
    Bscroll,
    TabControl,
    GoodsList,
    BackTop,

    HomeSwiper,
    Recommend,
    FeatureView
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: "pop",
      isTopShow: false,
      isFixed: false,
      tabOffsetTop: 0,
      scrollY: 0
    };
  },

  activated() {
    this.$refs.scroll.scrollBack(0, this.scrollY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.scrollY = this.$refs.scroll.getScrollY();
    console.log(this.scrollY);
  },
  created() {
    this.getListData();
    this.getGoods("pop", 1);
    this.getGoods("new", 1);
    this.getGoods("sell", 1);
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  // mounted() {
  //   this.tabClick(0);
  // },
  methods: {
    /**
     * 监听事件相关
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex = index;
      this.$refs.tabControl2.currentIndex = index;
    },
    backTopClick() {
      this.$refs.scroll.scrollBack(0, 0);
    },
    scrollPosition(position) {
      // 监听滚动  是否显示返回顶部
      this.isTopShow = position.y < -1000;
      // 监听滚动距离，是否显示tab栏
      this.isFixed = position.y < -this.$refs.tabControl1.$el.offsetTop;
    },
    loadMore() {
      console.log("加载更多");
      this.getGoods(this.currentType);
    },
    /*
     * 网络请求相关
     */
    getListData() {
      getHomeMultidata().then(res => {
        const resData = res.data;
        this.banners = resData.banner.list;
        this.recommends = resData.recommend.list;
      });
    },
    getGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        this.$refs.scroll.finishPullUp();
      });
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.home {
  height: 100vh;
  position: relative;
  .tab-control-fixed{
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
  }
}
.home-nav {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;

  z-index: 1;
  background: var(--color-tint);
  color: #fff;
}
.home-content {
  overflow: hidden;

  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.tab-control {
  /* position: sticky;
  top: 44px; */
  position: relative;
  z-index: 1;
}
</style>
