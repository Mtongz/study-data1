<template>
  <div class="payment-Bar">
    <div class="payment-check">
      <input
        type="checkbox"
        id="allChecked"
        :checked="isSelectAll"
        @click="ckeckClick"
      />
      <label for="allChecked">全选</label>
    </div>
    <div class="payment-content">
      <span>合计:￥{{ totalPrice }}</span>
    </div>
    <div class="payment-btn">
      <div class="btn-text" @click="getAccount">
        去结算({{ checkedLength }})
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "PaymentBar",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["cartList"]),
    totalPrice() {
      return this.cartList
        .filter(item => item.checked)
        .reduce((pre, item) => {
          return pre + item.price * item.count;
        }, 0)
        .toFixed(2);
    },
    checkedLength() {
      return this.cartList.filter(item => item.checked).length;
    },
    isSelectAll() {
      return (
        this.cartList.length !== 0 && this.cartList.every(item => item.checked)
      );
    }
  },
  methods: {
    ckeckClick() {
      if (this.isSelectAll) {
        //全部选中
        this.cartList.forEach(item => (item.checked = false));
      } else {
        //部分或全部不选中
        this.cartList.forEach(item => (item.checked = true));
      }
    },
    getAccount() {
      if (!this.isSelectAll) {
        this.$toast.show('请选择要结算的物品', 1500)
      }
    }
  },
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
  #allChecked {
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
