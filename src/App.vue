<template>
  <div v-wechat-title="$route.meta.title">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 0;
  margin: 0;
}
html, body {
  padding: 0;
  margin: 0;
  background: #f5f5f5;
}
</style>
