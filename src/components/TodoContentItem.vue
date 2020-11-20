<template>
  <div class="content-item">
    <label :class="{ label: complete }">
      <input type="checkbox" @click="changeComplete" :checked="complete" />
      {{ todo.value }}
      <span class="dot"></span>
    </label>
    <button @click="deleteTodo" class="iconfont icon-shanchu delete"></button>
  </div>
</template>

<script>
import bus from "@/utils/bus";

export default {
  data() {
    return {
      complete: this.todo.complete,
    };
  },
  props: {
    todo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    changeComplete() {
      bus.$emit("changeComplete", this.todo.id);
      this.complete = !this.complete;
    },
    deleteTodo() {
      bus.$emit("deleteTodo", this.todo.id);
    }
  },
};
</script>
<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_2218934_nernx0jdp1q.css");

.content-item {
  background: rgb(255, 255, 255);
  position: relative;
  height: 1rem;
  padding: 0.2rem;
  margin: 6px 0;
  border-radius: 5px;
  display: flex;
  input {
    margin-right: 5px;
    opacity: 0;
  }
  label {
    flex: 1;
  }
  .label {
    text-decoration: line-through;
    font-style: italic;
  }

  span.dot::before,
  span.dot::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    border: 1px solid #b382f9;
    top: 50%;
    left: 5%;
    transform: translate(-50%, -50%);
  }

  span.dot::before {
    width: 0.4rem;
    height: 0.4rem;
  }
  span.dot::after {
    width: 0.3rem;
    height: 0.3rem;
    background: #b382f9;
    transition: 0.4s;
    opacity: 0;
  }
  input:checked + span.dot::after {
    opacity: 1;
  }
  .delete {
    background-color: #fff;
    border: none;
    outline: none;
    &:hover {
      cursor: pointer;
      color: rgb(255, 0, 0);
    }
  }
}
</style>