<!--
 * @Description: 
 * @Autor: Tong
 * @Date: 2021-08-10 15:39:14
 * @LastEditors: Tong
 * @LastEditTime: 2021-08-21 17:32:41
-->
<template>
  <div class="todo-container">
    <div class="todo-wrap">
      <Header @add-todo="addTodo" />
      <List
        :todos="todos"
        :updateTodo="updateTodo"
        :handleDelete="handleDelete"
      />
      <Footer :todos="todos" @update-all="updateAll" @clear-all="clearAll" />
    </div>
    <div class="slot-wrap">
      <Card title="游戏">
        <template slot="youxi">
          <ul>
            <li v-for="game in gameArr">{{ game.name }}---{{ game.price }}</li>
          </ul>
        </template>
      </Card>
      <Card title="美食" slot="meishi">
        <template slot="meishi">
          <img src="./assets/logo.png" alt="">
        </template>
      </Card>
      <Card title="视频">
        <template slot="radio">
          <video :src="radioUrl" controls></video>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import List from "./components/List";
import Footer from "./components/Footer";

import Card from "./components/Card";
export default {
  name: "App",
  components: { Header, List, Footer, Card },
  data() {
    const localTodos = localStorage.getItem("todos");
    let todos;
    try {
      todos = JSON.parse(localTodos) || [];
    } catch (error) {
      alert("本地缓存异常，已重置");
      localStorage.removeItem("todos");
      todos = [];
    }
    return {
      todos,
      gameArr: [
        { id: "001", name: "王者荣耀", price: 0 },
        { id: "002", name: "绝地求生", price: 88 },
        { id: "003", name: "使命召唤", price: 188 },
        { id: "004", name: "穿越火线", price: 5888 }
      ],
      radioUrl: 'http://vfx.mtime.cn/Video/2019/02/04/mp4/190204084208765161.mp4'
    };
  },
  computed: {},
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    updateTodo(id, state) {
      this.todos = this.todos.map(todoItem => {
        if (id === todoItem.id) return { ...todoItem, done: state };
        return todoItem;
      });
    },
    handleDelete(id) {
      this.todos = this.todos.filter(item => item.id !== id);
    },
    updateAll(done) {
      this.todos = this.todos.map(todo => {
        return { ...todo, done };
      });
    },
    clearAll() {
      this.todos = this.todos.filter(item => !item.done);
    }
  },
  watch: {
    todos: {
      deep: true, //开启深度监视
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      }
    }
  },
  mounted() {}
};
</script>
<style lang="scss">
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
/**Card */
.slot-wrap {
  display: flex;
  justify-content: space-around;
}
/**Img */
img {
  width: 100%;
}
/**video */
video {
  width: 100%;
}
</style>
