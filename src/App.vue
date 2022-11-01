<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute();
const aa = '';
console.log(aa);
function bb() {}
bb();
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite1" :total="1" />
  <router-link to="/">home</router-link>
  <router-link to="/mine">mine</router-link>

  <router-view></router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
