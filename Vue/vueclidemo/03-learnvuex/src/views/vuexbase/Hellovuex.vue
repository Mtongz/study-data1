<template>
	<div>{{ counter }}</div>
</template>

<script>
export default {
	components: {},
	data() {
		return {};
	},
  computed:{
    counter(){
      return this.$store.state.counter
    }
  },
	methods: {},
	mounted() {},
};
</script>
<style >
</style>