<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-20 16:57:55
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-20 17:37:04
-->
<template>
  <div class="card">
    <h3 class="title">{{ title }}分类</h3>
    <slot name="youxi"></slot>
    <slot name="meishi"></slot>
    <slot name="radio"></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ['title']
};
</script>

<style>
.card {
  width: 180px;
  height: 300px;
  background-color: aqua;
}
.title{
  text-align: center;
}
</style>
