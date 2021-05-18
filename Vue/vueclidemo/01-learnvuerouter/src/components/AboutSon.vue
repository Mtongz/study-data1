<template>
	<div>
		{{ message }}
		<input type="button" @click="sentMoney(money)" value="赚钱" />
	</div>
</template>

<script>
export default {
	components: {},
	props: {
		message: String,
	},
	data() {
		return {
			money: "翻了五倍",
		};
	},
	methods: {
		sentMoney(val) {
			this.$emit("getMoney", val);
		},
	},
	mounted() {},
};
</script>
<style></style>
