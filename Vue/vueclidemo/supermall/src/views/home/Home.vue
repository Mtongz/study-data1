<template>
	<div class="home">
		<nav-bar class="home-nav">
			<div slot="center">购物街</div>
		</nav-bar>
		<home-swiper :banners="banners"></home-swiper>
		<Recommend :recommends="recommends"></Recommend>
		<feature-view></feature-view>
	</div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";


import HomeSwiper from "./components/HomeSwiper";
import Recommend from "./components/Recommend";
import FeatureView from './components/FeatureView'

import { getHomeMultidata } from "network/apis/home";
export default {
	name: "Home",
	components: {
		NavBar,
		HomeSwiper,
		Recommend,
		FeatureView
	},
	data() {
		return {
			banners: [],
			recommends: [],
		};
	},
	created() {
		getHomeMultidata().then((res) => {
			console.log(res.data);
			const resData = res.data;
			this.banners = resData.banner.list;
			this.recommends = resData.recommend.list;
			console.log(this.recommends);
		});
	},
	methods: {},
	mounted() {},
};
</script>
<style scoped>
.home-nav {
	background: var(--color-tint);
	color: #fff;
}
</style>