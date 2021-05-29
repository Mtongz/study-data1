<template>
  <div>
    <!-- 导航栏 -->
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <!-- 购物车内容 -->
    <cart-list></cart-list>
    <!-- payment navbar -->
		<payment-bar></payment-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";

import CartList from "./components/CartList";
import PaymentBar from './components/PaymentBar'

import { mapGetters } from "vuex";
export default {
  name: "Cart",
  components: {
    NavBar,

    CartList,
		PaymentBar
  },
  computed: {
    ...mapGetters(["cartLength"])
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
#cart {
}
.cart-nav {
}
</style>
