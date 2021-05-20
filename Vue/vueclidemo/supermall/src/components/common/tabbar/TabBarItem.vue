<template>
	<div class="tab-bar-item" @click="tabbarHandleClick">
		<div v-if="!isActive"><slot name="tabbar-icon"></slot></div>
		<div v-else><slot name="tabbar-icon-active"></slot></div>
		<div :style="activeStyle"><slot name="tabbar-text"></slot></div>
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		path: String,
		activeColor: {
			type: String,
			default: "#ff5777",
		},
	},
	data() {
		return {
			// isActive: false,
		};
	},
	computed: {
		// 路由激活状态  实现点击高亮
		isActive() {
			return this.$route.path.indexOf(this.path) !== -1;
		},
		activeStyle() {
			return this.isActive ? { color: this.activeColor } : {};
		},
	},
	methods: {
		tabbarHandleClick() {
			this.$router.push(this.path);
			console.log(this.$route.path);
			console.log(this.path);
		},
	},
	mounted() {},
};
</script>
<style >
.tab-bar-item {
	flex: 1;
	height: 49px;
	text-align: center;
	font-size: 14px;
}
.tab-bar-item img {
	width: 24px;
	height: 24px;
	vertical-align: middle;
}
</style>