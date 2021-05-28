<template>
  <div class="detail-tabbar">
    <div class="">
      <div>
        <i class="icon detail-service"></i>
        <span>客服</span>
      </div>
      <div>
        <i class="icon detail-store"></i>
        <span>店铺</span>
      </div>
      <div>
        <i class="icon detail-collect"></i>
        <span>收藏</span>
      </div>
    </div>
    <div class="">
      <button class="detail-addCart" @click="addCart">加入购物车</button>
      <button class="detail-buy">购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailTabBar",
  components: {},
  data() {
    return {};
  },
  methods: {
    addCart() {
      this.$emit("addCart");
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.detail-tabbar {
  left: 0;
  right: 0;
  bottom: 0;
  font-size: 14px;
  height: 49px;
  box-shadow: 0 1px 5px rgba(100, 100, 100, 0.2);
}
// position: relative;

//
// background: #fff;

// .detail-tabbar-item {
//   display: flex;
//   align-items: center;
//   text-align: center;
//   flex: 1;
//   div {
//     flex: 1;
//   }
//   button {
//     flex: 1;
//     border-radius: 15px;
//     border: none;
//     color: #fff;
//     padding: 8px 0;
//     margin-right: 5px;
//   }
// }

// .icon {
//   display: block;
//   width: 22px;
//   height: 22px;
//   background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
//   margin: 0 0 0 22px;
// }
// .detail-service {
//   background-position: 0 -53px;
// }
// .detail-store {
//   background-position: 0 -98px;
// }
// .detail-addCart {
//   background-image: -webkit-linear-gradient(
//     315deg,
//     #f2140c,
//     #f2270c 70%,
//     #f24d0c
//   );
//   background-image: linear-gradient(135deg, #f2140c, #f2270c 70%, #f24d0c);
// }
// .detail-buy {
//   background-image: -webkit-linear-gradient(
//     315deg,
//     #ffba0d,
//     #ffc30d 69%,
//     #ffcf0d
//   );
//   background-image: linear-gradient(135deg, #ffba0d, #ffc30d 69%, #ffcf0d);
// }
</style>
