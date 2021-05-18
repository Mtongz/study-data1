<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<img slot="tabbar-icon" src="~assets/tabbar/home.svg" />
			<img slot="tabbar-icon-active" src="~assets/tabbar/home_active.svg" />
			<div slot="tabbar-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/categroy">
			<img slot="tabbar-icon" src="~assets/tabbar/category.svg" />
			<img slot="tabbar-icon-active" src="~assets/tabbar/category_active.svg" />
			<div slot="tabbar-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="skyblue">
			<img slot="tabbar-icon" src="~assets/tabbar/shopCart.svg" />
			<img slot="tabbar-icon-active" src="~assets/tabbar/shopCart_active.svg" />
			<div slot="tabbar-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<img slot="tabbar-icon" src="~assets/tabbar/profile.svg" />
			<img slot="tabbar-icon-active" src="~assets/tabbar/profile_active.svg" />
			<div slot="tabbar-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
	components: {
		TabBar,
		TabBarItem,
	},
	data() {
		return {};
	},
	methods: {},
	mounted() {},
};
</script>
<style >
</style>