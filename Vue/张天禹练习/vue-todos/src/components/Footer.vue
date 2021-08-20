<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 15:39:14
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-18 17:04:12
-->
<template>
  <div class="todo-footer">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @click="selectAll" /> -->
      <input type="checkbox" v-model="isAll" @click="selectAll" />
    </label>
    <span>
      <span>已完成{{ finished }}</span> / 全部{{ total }}
    </span>
    <button class="btn btn-danger" @click="clearAllDone">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  props: ["todos"],
  data() {
    return {};
  },
  computed: {
    finished() {
      return this.todos.reduce((pre, cur) => (pre += cur.done ? 1 : 0), 0);
    },
    total() {
      return this.todos.length;
    },
    // 1.配合@click="selectAll"实现全选|全不选功能，App组件updateAll更新数据
    // isAll() {
    //   return this.finished === this.total && this.total > 0;
    // },
    isAll: {
      set(flag) {
        this.$emit('update-all', flag);
      },
      get() {
        return this.finished === this.total && this.total > 0;
      }
    }
  },
  methods: {
    selectAll(event) {
      console.log(this);
      // this.updateAll(event.target.checked);
    },
    clearAllDone() {
      if(confirm('确定删除所有已完成的TODO吗？')) {
        this.$emit('clear-all');
      }
    }
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
