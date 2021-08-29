<template>
  <div class="main-todo">
    <input
      type="text"
      class="add-todo"
      placeholder="what to do?"
      autofocus
      v-model="content"
      @keyup.enter="addTodo"
    />
    <todo-item
      v-for="(item, index) in filterData"
      :key="index"
      :todo="item"
      @changeStatus="changeStatus"
      @del="handleDeleteItem"
    ></todo-item>
    <todo-info
      :total="total"
      @toggleState="toggleState"
      @clearCompleted="clearCompleted"
    ></todo-info>
  </div>
</template>

<script>
import TodoItem from "./comm/TodoItem.vue";
import TodoInfo from "./comm/TodoInfos.vue";
let id = 0;
export default {
  name: "MainTodo",
  components: {
    TodoItem: TodoItem,
    TodoInfo: TodoInfo,
  },
  data() {
    return {
      todoData: [],
      content: "",
      total: 0,
      filter: "all",
    };
  },
  watch: {
    todoData: {
      deep: true,
      handler() {
        this.total = this.todoData.filter((e) => e.completed == false).length;
      },
    },
  },
  computed: {
    filterData() {
      switch (this.filter) {
        case "all":
          return this.todoData;
          break;
        case "active":
          return this.todoData.filter((e) => e.completed == false);
          break;
        case "completed":
          return this.todoData.filter((e) => e.completed == true);
          break;
      }
    },
  },
  methods: {
    changeStatus(index, flag) {
      this.$set(this.todoData[index], "completed", flag);
    },
    addTodo() {
      if (!this.content.trim()) {
        return;
      }
      this.todoData.unshift({
        id: id++,
        content: this.content,
        completed: false,
      });
      this.content = "";
    },
    handleDeleteItem(id) {
      this.todoData.splice(
        this.todoData.findIndex((e) => e.id == id),
        1
      );
    },
    toggleState(state) {
      this.filter = state;
      this.total = this.filterData.length;
    },
    clearCompleted() {
      this.todoData = this.todoData.filter((e) => e.completed == false);
    },
  },
};
</script>

<style scoped lang="scss">
.main-todo {
  margin: 0 auto;
  width: 600px;
  background-color: #fff;
  box-shadow: 0 0 5px #666;
  .add-todo {
    width: 100%;
    padding: 16px 16px 16px 36px;
    font-size: 24px;
    font-weight: inherit;
    font-family: inherit;
    color: inherit;
    border: none;
    outline: none;
    box-sizing: border-box;
  }
}
</style>