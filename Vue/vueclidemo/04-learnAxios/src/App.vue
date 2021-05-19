<template>
	<div id="app">
		<img src="./assets/logo.png" />
	</div>
</template>

<script>
import { coderwhy } from "./network/request/request";
export default {
	name: "App",
	created() {
		coderwhy({
			url: "/home/multidata",
		})
			.then((res) => {
				console.log(res);
			})
			.catch((err) => {
				console.log(err);
			});
	},
};
</script>

<style>
</style>
