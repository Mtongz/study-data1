<template>
  <div class="tab-control">
    <div
      v-for="(item, index) in titles"
      :key="item"
      class="control-item"
      @click="controlChange(index)"
      :class="{ active: index === currentIndex }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    controlChange(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  },
  mounted() {}
};
</script>
<style>
.tab-control {
  display: flex;
  height: 39px;
  line-height: 39px;
  font-size: 14px;

  background: #fff;
}
.control-item {
  flex: 1;
  text-align: center;
}
.active {
  color: var(--color-high-text);
}
.active span {
  padding: 5px;
  border-bottom: 3px solid var(--color-high-text);
}
</style>
