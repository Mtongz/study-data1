<template>
	<div>
		<about-son :message="message" @getMoney="getmoney" />
		{{ childmoney }}
	</div>
</template>

<script>
import AboutSon from './AboutSon.vue';
export default {
	components: { AboutSon },
	data() {
		return {
			message: "定个小目标，先赚一个亿",
			childmoney: "",
		};
	},
	created() {
		console.log('created');
	},
	methods: {
		getmoney(val) {
			console.log(val);
			this.childmoney = val;
		},
	},
	mounted() {},
};
</script>
<style >
</style>