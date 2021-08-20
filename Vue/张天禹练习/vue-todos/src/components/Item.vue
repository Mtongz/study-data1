<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 16:19:33
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-18 16:55:52
-->
<template>
  <li @mouseenter="isEnter = true" @mouseleave="isEnter = false">
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="update(todo.id, $event)"
      />
      <span>{{ todo.name }}</span>
    </label>
    <button
      class="btn btn-danger"
      :style="{ display: isEnter ? 'block' : 'none' }"
      @click="deleteItem(todo.id)"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  name: "Item",
  components: {},
  props: ["todo", "updateTodo", "handleDelete"],
  data() {
    return {
      isEnter: false
    };
  },
  computed: {},
  methods: {
    update(id, event) {
      // 通知APP去更新这个todo
      const { checked } = event.target;
      this.updateTodo(id, checked);
    },
    deleteItem(id) {
      console.log(id);
      if (confirm("确定删除吗？")) {
        this.handleDelete(id);
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:hover {
  background-color: #ddd;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
