<template>
  <div class="content">
    <main-header></main-header>
    <main-todo></main-todo>
  </div>
</template>

<script>
// import "./assets/styles/global.styl";
import "scss/base.scss";
import MainHeader from "./component/MainHeader/index.vue";
import MainTodo from "./component/MainTodo/index.vue";
export default {
  name: "App",
  components: {
    MainHeader: MainHeader,
    MainTodo: MainTodo,
  },
};
</script>