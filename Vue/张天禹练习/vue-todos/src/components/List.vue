<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 15:39:14
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-18 16:55:45
-->
<template>
  <ul class="todo-main">
    <Item
      v-for="v in todos"
      :key="v.id"
      :todo="v"
      :updateTodo="updateTodo"
      :handleDelete="handleDelete"
    />
  </ul>
</template>

<script>
import Item from "./Item";
export default {
  name: "List",
  components: { Item },
  props: ["todos", "updateTodo", "handleDelete"],
  data() {
    return {};
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
<style scoped lang="scss">
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>
