<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 15:39:14
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-18 16:40:45
-->
<template>
  <div class="todo-header">
    <input
      type="text"
      placeholder="请输入你的任务名称，按回车键确认"
      v-model="todoName"
      @keyup.enter="add()"
    />
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      todoName: ""
    };
  },
  computed: {},
  methods: {
    add() {
      if (!this.todoName.trim()) {
        return alert('请输入内容')
      }
      const todo = { id: Date.now(), name: this.todoName, done: false };
      this.$emit('add-todo', todo)
      this.todoName = ''
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}
</style>
