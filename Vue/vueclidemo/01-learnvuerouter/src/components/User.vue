<template>
	<div>
    <span>{{message}}</span>
    <span>{{userId}}</span>
  </div>
</template>

<script>
export default {
	components: {},
	data() {
		return {
			message: "我的内容",
		};
	},
	computed: {
		userId() {
      return this.$route.params.userId
    },
	},
	methods: {},
	mounted() {},
};
</script>
<style >
</style>