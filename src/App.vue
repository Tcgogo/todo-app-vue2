<template>
  <main>
    <div class="container">
      <h1>欢迎使用Tcgogo代办事项</h1>
      <todo-add @appendTodo="appendTodo" :tid="tid"></todo-add>
      <todo-list></todo-list>
      <todo-content :todos="todos"></todo-content>
    </div>
  </main>
</template>

<script>
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
import TodoContent from "./components/TodoContent";

import bus from "@/utils/bus";

export default {
  name: "App",
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    appendTodo(todo) {
      this.todos.push(todo);
    }
  },
  computed: {
    tid(){
      if(this.todos[this.todos.length - 1]){
        return this.todos[this.todos.length - 1].id + 1;
      } else {
        return 1;
      }
      
    }
  },
  components: {
    TodoAdd,
    TodoList,
    TodoContent,
  },
  created() {
    if(localStorage.length>1){
      this.todos = JSON.parse(localStorage.getItem('todos'));
    } else {
      console.log(this.todos)
    }
  },
  mounted() {
    bus.$on('changeComplete', (id) => {
      this.todos.forEach((item) => {
        id === item.id ? item.complete = !item.complete : '';
      });
      localStorage.setItem('todos', JSON.stringify(this.todos));
    })
  },
  updated() {
    console.log(1)
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
};
</script>

<style lang="less">
:root {
  font-size: 50px;
}
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Helvetica, "PingFang SC", "Microsoft Yahei", sans-serif;
  list-style: none;
}

main {
  width: 100vw;
  min-height: 100vh;
  padding: 10vh 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background: rgb(203, 210, 240);
  .container {
    width: 60%;
    max-width: 400px;
    padding: 5vh 0;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.15);
    border-radius: 24px;
    background-color: rgb(245, 246, 252);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
}

/* 标题 */
h1 {
  margin: 24px 0;
  font-size: 0.5rem;
  color: #414873;
}
</style>
