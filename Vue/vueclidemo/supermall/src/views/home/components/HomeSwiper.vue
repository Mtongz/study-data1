<template>
	<div>
		<swiper>
			<swiper-item v-for="(item, index) in banners" :key="index">
				<a :href="item.link">
					<img :src="item.image" alt="item.title" />
				</a>
			</swiper-item>
		</swiper>
	</div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
	components: {
		Swiper,
		SwiperItem,
	},
	props: {
		banners: {
			type: Array,
			default() {
        return []
      },
		},
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