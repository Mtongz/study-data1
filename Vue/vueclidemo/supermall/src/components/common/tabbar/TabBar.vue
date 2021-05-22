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
#tab-bar {
	position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

	display: flex;
	background: #f6f6f6;
	box-shadow: 0 1px 4px rgba(100, 100, 100, .8);
}
</style>