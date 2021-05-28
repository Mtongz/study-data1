<template>
  <div class="bscroll" ref="wrapper">
    <div class="bscroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Bscroll",
  components: {},
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      bscroll: null
    };
  },
  mounted() {
    this.bscroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      observeDOM: true,
      observeImage: true,
      scrollY: true,
      scrollbar: true,
      mouseWheel: {
        speed: 20,
        invert: false,
        easeTime: 300
      }
    });
    if (this.probeType === 2 || this.probeType === 3) {
      this.bscroll.on("scroll", position => {
        this.$emit("scroll", position);
      });
    }
    if (this.pullUpLoad) {
      this.bscroll.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    scrollBack(x, y, time = 300) {
      this.bscroll && this.bscroll.scrollTo(x, y, time);
    },
    finishPullUp() {
      this.bscroll && this.bscroll.finishPullUp();
    },
    getScrollY() {
      return this.bscroll ? this.bscroll.y : 0;
    },
    refresh() {
      this.bscroll && this.bscroll.refresh()
    }
  }
};
</script>
<style scoped></style>
