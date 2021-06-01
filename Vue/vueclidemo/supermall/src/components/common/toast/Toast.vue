<template>
  <div class="toast" v-show="isShow">
    <div>{{ message }}</div>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      message: "",
      isShow: false
    };
  },
  methods: {
    show(message, duration = 1000) {
      this.isShow = true;
      this.message = message;
      setTimeout(() => {
        this.isShow = false;
        this.message = "";
      }, duration);
    }
  },
  mounted() {}
};
</script>
<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
  
  padding: 8px 10px;
  border-radius: 7px;
  font-size: 14px;

  color: #fff;
  background: rgba(0, 0, 0, 0.7);
}
</style>
