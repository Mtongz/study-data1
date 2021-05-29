<template>
  <div class="payment-Bar">
    <div class="payment-check">
      <input type="checkbox" id="allChecked" />
      <label for="allChecked">全选</label>
    </div>
    <div class="payment-content">
      <span>合计:￥{{totalPrice}}</span>
    </div>
    <div class="payment-btn">
      <div class="btn-text">去结算({{}})</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaymentBar",
  components: {},
  data() {
    return {};
  },
  computed: {
    totalPrice(){

    }
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.payment-Bar {
  height: 40px;
  background: #eee;
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.payment-check {
  color: #8e8e8e;
  font-size: 15px;
  display: flex;
  align-items: center;
  #allChecked{
    margin: 0 5px;
  }
}
.payment-content {
  font-size: 16px;
}
.payment-btn {
  .btn-text {
    color: #fff;
    background: #ff5400;
    border: none;
    padding: 10px 20px;
  }
}
</style>
