<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-11 15:06:23
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-11 16:07:55
-->
<template>
  <div>
    <div style="position: relative">
      <div v-show="isShow">
        身份证号：<input type="text" /> 身份证号：<input type="text" />
        <input type="button" value="确定" />
        <input type="button" value="重置" />
      </div>
      <span @click="isShow = !isShow" class="arrow"> > </span>
    </div>
    <div>
      <table border="1">
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
      </table>

      <table border="1">
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
      </table>

      <table border="1">
        <tr>
          <th>Month</th>
          <th>Savings</th>
        </tr>
        <tr>
          <td>January</td>
          <td>$100</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    handleClick() {}
  }
};
</script>

<style></style>
