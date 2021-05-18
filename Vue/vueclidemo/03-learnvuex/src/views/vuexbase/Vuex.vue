<template>
	<div>
		{{ counter }}
		<button @click="add">+</button>
		<button @click="sub">-</button>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
	computed: {
		counter() {
			return this.$store.state.counter;
		},
	},
	methods: {
		add() {
			this.$store.commit("increment");
		},
		sub() {
			this.$store.commit("decrement");
		},
	},
	mounted() {},
};
</script>
<style >
</style>