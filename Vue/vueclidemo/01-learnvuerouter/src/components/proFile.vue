<template>
	<div>
		<h3>我是proFile组件</h3>
		<h3>{{ $route.query }}</h3>
		<ul>
			<li v-for="(item, key, index) in $route.query" :key="index">
				{{ key }}:{{ item }}:{{ index }}
			</li>
		</ul>
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
</style>