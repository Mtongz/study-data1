<template>
  <swiper class="detail-swiper">
    <swiper-item v-for="item in swiperImg" :key="item">
      <img :src="item" alt="">
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: 'DetailSwiper',
  components: {
    Swiper,
    SwiperItem
  },
  props: {
    swiperImg:{
      type: Array,
      default(){
        return []
      }
    }
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>
<style scoped>
.detail-swiper{
  height: 300px;
  overflow: hidden;
}
</style>
