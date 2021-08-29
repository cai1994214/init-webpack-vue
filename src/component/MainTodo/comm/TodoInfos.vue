<template>
  <div class="todo-info">
    <span class="total">{{ total }} item left</span>
    <div class="tabs">
      <a
        :class="['btn', 'primary', 'border', state == item ? 'actived' : '']"
        v-for="(item, index) in status"
        :key="index"
        @click="toggleState(item)"
        >{{ item }}</a
      >
    </div>
    <button class="btn info" @click="clearCompleted">Clear Completed</button>
  </div>
</template>

<script>
export default {
  name: "TodoInfo",
  data() {
    return {
      status: ["all", "active", "completed"],
      state: "all",
    };
  },
  props: {
    total: {
      type: Number,
      default: 0,
    },
  },
  methods: {
    toggleState(state) {
      this.state = state;
      this.$emit("toggleState", state);
    },
    clearCompleted() {
      this.$emit("clearCompleted");
    },
  },
};
</script>

<style lang="scss" scroped>
@import "scss/theme.scss";
@import "scss/mixins.scss";
.todo-info {
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  padding: 5px 10px;
  line-height: 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  .total {
    color: $red;
  }

  .tabs {
    display: flex;
    justify-content: space-between;
    width: 200px;

    .btn.primary.border {
      @include primaryBorderBtn;

      &.actived {
        @include primaryBtn;
      }
    }
  }

  .btn.info {
    @include infoBtn;
  }
}
</style>