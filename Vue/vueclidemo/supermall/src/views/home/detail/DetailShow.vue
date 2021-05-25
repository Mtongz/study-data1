<template>
  <div class="detail-show">
    <div>
      <div class="start lineBar">
        <i class="dot start-dot"></i>
      </div>
      <div class="show-desc">{{}}</div>
      <div class="end lineBar">
        <i class="dot end-dot"></i>
      </div>
    </div>
    <div>keyword</div>
    <div>img</div>
  </div>
</template>

<script>
export default {
  name: "DetailShow",
  components: {},
  props: {
    
  },
  data() {
    return {};
  },
  methods: {},
  mounted() {
    
  }
  ,created() {
    
  },
};
</script>
<style scoped>
.start {
  float: left;
}
.start-dot {
  left: 0;
}
.show-desc{
  padding: 20px;
}
.end {
  float: right;
}
.end-dot {
  right: 0;
}
.lineBar {
  width: 180px;
  height: 1px;
  background: #a3a3a5;
  position: relative;
}
.dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  background: #000;
  border-radius: 50%;
  position: absolute;
  top: -2px;
}
</style>
