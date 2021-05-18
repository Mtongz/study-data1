<template>
	<div>
		<div>{{ message }}</div>
		<router-link to="/Home/HomeNews">新闻</router-link>
		<router-link to="/Home/HomeNewsMessage">消息</router-link>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			message: "我是Home页面的内容",
		};
	},
	methods: {},
	mounted() {},
};
</script>
<style >
</style>