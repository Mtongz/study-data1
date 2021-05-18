<template>
	<div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>
<style >
  #tab-bar{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
  }
</style>