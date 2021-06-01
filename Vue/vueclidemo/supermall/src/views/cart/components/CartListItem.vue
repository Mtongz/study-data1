<template>
  <div class="cartItem">
    <div class="item-check">
      <input type="checkbox" :checked="cartItem.checked" @click="checkChange" />
    </div>
    <div class="item-image">
      <img :src="cartItem.image" alt="" />
    </div>
    <div class="item-content">
      <div class="item-title">{{ cartItem.title }}</div>
      <div class="item-desc">{{ cartItem.desc }}</div>
      <div class="item-bottom">
        <div class="item-price">￥{{ cartItem.price }}</div>
        <div class="item-count">
          div
          <div>{{ cartItem.count }}</div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartListItem",
  components: {},
  props: {
    cartItem: {
      type: Object,
      default() {
        return {};
      }
    },

  },
  data() {
    return {};
  },
  created() {
    console.log(this.cartItem);
  },
  methods: {
    checkChange(){
      this.cartItem.checked = !this.cartItem.checked
      console.log(this.cartItem.checked);
      console.log(this.$store.state.cartList);
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.cartItem {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-top: 5px;
}
.item-check {
  width: 20px;
  display: flex;
  justify-content: center;
}
.item-image {
  width: 70px;
  height: 70px;
  overflow: hidden;
  border-radius: 10px;
}
.item-image img {
  width: 100%;
}
.item-content {
  flex: 1;
  padding: 5px;
  .item-title,
  .item-desc {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .item-title {
    font-size: 14px;
    font-weight: 700;
  }
  .item-desc {
    font-size: 12px;
    margin: 5px 0;
  }
  .item-bottom {
    display: flex;
    justify-content: space-between;
    .item-price {
      color: #f29d77;
    }
  }
}
</style>
