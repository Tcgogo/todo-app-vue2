<!--  -->
<template>
  <div class="todo-list">
    <ul>
      <li
        v-for="item of titleList"
        @click="changeActive(item.msg)"
        :class="{ active: isAciveId === item.msg }"
        :key="item.msg"
      >
        {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script>
import bus from '@/utils/bus';

export default {
  data() {
    return {
      titleList: [
        { value: "全部", msg: "all" },
        { value: "已完成", msg: "done" },
        { value: "未完成", msg: "todo" },
      ],
      isAciveId: "all",
    };
  },
  methods: {
    changeActive(msg) {
      this.isAciveId = msg;
      bus.$emit('changeList', msg)
    },
  },

};
</script>
<style lang="less" scoped>
.todo-list {
  padding: 2vh;
  font-size: 0.3rem;
  width: 70%;
  ul {
    display: flex;
    justify-content: space-between;
    li {
      color: #c0c2ce;
      cursor: pointer;
      transition: 0.2s;
    }
    li.active {
      color: #6b729c;
      transform: scale(1.2);
    }
  }
}
</style>