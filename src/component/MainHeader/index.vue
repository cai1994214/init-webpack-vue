<template>
  <header class="main-header">
    <h1>TodoList</h1>
  </header>
</template>

<script>
export default {
  name: "MainHeader",
};
</script>
<style lang="scss" scoped>
@import "scss/theme.scss";
.main-header {
  text-align: center;
  h1 {
    margin: 20px;
    font-size: 100px;
    font-weight: 100;
    color: rgb(252, 157, 154);
    text-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  }
  span {
    color: $red;
  }
}
</style>