<template>
  <div class="goods">
    <goods-list-item
      v-for="item in goods"
      :key="item.iid"
      :goods-item="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  props: {
    goods: {
      type: [Object,Array],
      default() {
        return [];
      }
    }
  },
  components: {
    GoodsListItem
  },
  data() {
    return {};
  },
  created() {},
  methods: {},
  mounted() {}
};
</script>
<style>
.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
}
</style>
