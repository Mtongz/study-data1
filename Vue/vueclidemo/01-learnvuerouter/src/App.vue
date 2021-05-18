<template>
	<div id="app">
		<router-link to="/Home">Home</router-link>
		<router-link to="/About">About</router-link>
		<!-- <router-link :to="{ path: '/User/' + userId }">User</router-link>
		<router-link
			:to="{
				path: '/proFile',
				query: {
					username: 'tong',
					age: '21',
				},
			}"
			>档案</router-link
		> -->
		<button @click="userClick">User</button>
		<button @click="proFileClick">档案</button>
		<router-view></router-view>
		<tab-bar>
			<tab-bar-item>
				<img slot="tabbar-icon" src="./assets/tabbar/home.svg" />
				<img slot="tabbar-icon-active" src="./assets/tabbar/home_active.svg" />
				<div slot="tabbar-text">首页</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="tabbar-icon" src="./assets/tabbar/category.svg" />
				<img slot="tabbar-icon-active" src="./assets/tabbar/category_active.svg" />
				<div slot="tabbar-text">分类</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="tabbar-icon" src="./assets/tabbar/shopCart.svg" />
				<img slot="tabbar-icon-active" src="./assets/tabbar/shopCart_active.svg" />
				<div slot="tabbar-text">购物车</div>
			</tab-bar-item>
			<tab-bar-item>
				<img slot="tabbar-icon" src="./assets/tabbar/profile.svg" />
				<img slot="tabbar-icon-active" src="./assets/tabbar/profile_active.svg" />
				<div slot="tabbar-text">我的</div>
			</tab-bar-item>
		</tab-bar>
	</div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar.vue";
import TabBarItem from "./components/tabbar/TabBarItem.vue";
export default {
	name: "App",
	components: {
		TabBar,
		TabBarItem,
	},
	data() {
		return {
			userId: "zhangsan",
		};
	},
	methods: {
		userClick() {
			this.$router.push({
				path: "/User/" + this.userId,
			});
		},
		proFileClick() {
			this.$router.push({
				path: "/proFile",
				query: {
					username: "tong",
					age: "21",
				},
			});
		},
	},
};
</script>

<style>
</style>
