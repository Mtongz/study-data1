<template>
	<tab-bar>
		<tab-bar-item path="/home">
			<img slot="tabbar-icon" src="~assets/img/tabbar/home.svg" />
			<img slot="tabbar-icon-active" src="~assets/img/tabbar/home_active.svg" />
			<div slot="tabbar-text">首页</div>
		</tab-bar-item>
		<tab-bar-item path="/category">
			<img slot="tabbar-icon" src="~assets/img/tabbar/category.svg" />
			<img
				slot="tabbar-icon-active"
				src="~assets/img/tabbar/category_active.svg"
			/>
			<div slot="tabbar-text">分类</div>
		</tab-bar-item>
		<tab-bar-item path="/cart" activeColor="skyblue">
			<img slot="tabbar-icon" src="~assets/img/tabbar/shopcart.svg" />
			<img
				slot="tabbar-icon-active"
				src="~assets/img/tabbar/shopcart_active.svg"
			/>
			<div slot="tabbar-text">购物车</div>
		</tab-bar-item>
		<tab-bar-item path="/profile">
			<img slot="tabbar-icon" src="~assets/img/tabbar/profile.svg" />
			<img
				slot="tabbar-icon-active"
				src="~assets/img/tabbar/profile_active.svg"
			/>
			<div slot="tabbar-text">我的</div>
		</tab-bar-item>
	</tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar";
import TabBarItem from "components/common/tabbar/TabBarItem";
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