<template>
  <div class="content-item">
    <label :class="{ label: complete }">
      <input type="checkbox" @click="changeComplete" :checked="complete"/> {{ todo.value }}
      <span class="dot"></span>
    </label>
  </div>
</template>

<script>
import bus from '@/utils/bus';

export default {
  data() {
    return {
      complete: this.todo.complete
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
      bus.$emit('changeComplete',this.todo.id);
      this.complete = !this.complete;
    }
  },

};
</script>
<style lang="less" scoped>
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
}
.content-item span.dot::before,
.content-item span.dot::after {
  content: "";
  display: block;
  position: absolute;
  border-radius: 50%;
  border: 1px solid #b382f9;
  top: 50%;
  left: 5%;
  transform: translate(-50%, -50%);
}

.content-item span.dot::before {
  width: 0.4rem;
  height: 0.4rem;
}
.content-item span.dot::after {
  width: 0.3rem;
  height: 0.3rem;
  background: #b382f9;
  transition: 0.4s;
  opacity: 0;
}

.content-item input:checked + span.dot::after {
  opacity: 1;
}
</style>