<template>
  <div :class="['todo-item', todo.completed ? 'completed' : '']">
    <input type="checkbox" v-model="todo.completed" />
    <label>{{ todo.content }}</label>
    <button @click="delItem"></button>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
  },
  methods: {
    delItem(id) {
      this.$emit("del", id);
    },
  },
  mounted() {},
};
</script>

<style scoped lang="scss">
@import "scss/theme.scss";
@import "scss/mixins.scss";
.todo-item {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 24px;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    button:after {
      content: "X";
      font-size: 24px;
      color: $light;
    }
  }

  &.completed {
    label {
      color: #d9d9d9;
      text-decoration: line-through;
    }
  }

  input {
    width: 30px;
    height: 30px;
    cursor: pointer;
    text-align: center;
    @include cleanDefaultStyle;
    &::after {
      content: url("assets/images/no-checkout.png");
    }
    &:checked::after {
      content: url("assets/images/checkout.png");
    }
  }

  label {
    flex: 1;
    padding-left: 20px;
    transition: all 0.5s;
  }

  button {
    width: 40px;
    background-color: transparent;
    cursor: pointer;
    @include cleanDefaultStyle;
  }
}
</style>