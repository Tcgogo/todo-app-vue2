<template>
  <div
    class="input-add animate__animated"
    :class="{ animate__shakeX: isEmpty }"
    ref="addInput"
  >
    <input type="text" @keyup.enter="appendTodo" v-model="todoValue" />
    <transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceIn"
    >
      <span class="warn" v-show="isEmpty">请输入代办事项!</span>
    </transition>
    <button @click="appendTodo">
      <i class="plus"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoValue: "",
      isEmpty: false,
    };
  },
  props: {
    tid: {
      type: Number,
    },
  },
  methods: {
    appendTodo() {
      if (this.todoValue == "") {
        this.isEmpty = true;
        return;
      } else {
        this.isEmpty = false;
      }
      const todo = {
        id: this.tid,
        value: this.todoValue,
        complete: false,
      };
      this.$emit("appendTodo", todo);
      this.todoValue = "";
    },
  },
  mounted() {
    this.$refs.addInput.addEventListener("animationend", () => {
      this.$nextTick(() => {
        this.isEmpty = false;
      });
    });
  },
};
</script>
<style lang="less" scoped>
.input-add {
  position: relative;
  display: flex;
  align-items: center;
  width: 80%;
  input {
    padding: 16px 52px 16px 18px;
    border-radius: 48px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.08);
    width: 100%;
    font-size: 16px;
    color: #626262;
  }
  button {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: linear-gradient(#c0a5f3, #7f95f7);
    border: none;
    color: white;
    position: absolute;
    right: 0;

    cursor: pointer;
    outline: none;
  }
  .plus {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff);
    background-size: 50% 2px, 2px 50%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .warn {
    position: absolute;
    color: red;
    font-size: 0.4rem;
    left: 1rem;
    opacity: .8;
  }
}
</style>