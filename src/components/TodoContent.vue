<!--  -->
<template>
  <div class="todo-content">
    <todo-content-item
      v-for="item of newTodo"
      :key="item.id"
      :todo="item"
    ></todo-content-item>
  </div>
</template>

<script>
import TodoContentItem from "./TodoContentItem";
import bus from "@/utils/bus";

export default {
  data() {
    return {
      isCheck: false,
      msg: "all",
    };
  },
  props: {
    todos: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    TodoContentItem,
  },
  computed: {
    newTodo() {
      switch (this.msg) {
        case "all":
          return this.todos;
          break;
        case "done":
          return this.todos.filter((item) => item.complete);
          break;
        case "todo":
          return this.todos.filter((item) => !item.complete);
          break;
      }
    },
  },
  mounted() {
    bus.$on("changeList", (msg) => {
      this.msg = msg;
    });
  },
};
</script>
<style lang="less" scoped>
.todo-content {
  font-size: 0.4rem;
  width: 80%;
  display: flex;
  flex-direction: column;
}
</style>