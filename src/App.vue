<template>
  <div>
    <h1>this is APP</h1>
    <span>你好</span>
    <div class="demoScss">
      这是一个scssdiv
      <span>scss测试</span>
    </div>
    <div>
      <span v-for="item in list" class="hotDemo" :key="item">{{ item }}</span>
      <div class="imgSrc"></div>
    </div>
    <button @click="addNode()">添加</button>
  </div>
</template>

<script>
import img from "./assets/images/my.jpg";

import "./assets/styles/test.css";
import "./assets/styles/demo.scss";

export default {
  name: "App",
  data() {
    return {
      imgSrc: img,
      list: [],
    };
  },
  methods: {
    addNode() {
      this.list.push(this.list.length);
    },
  },
  created() {},
  mounted() {
    this.list = [...Array(4).keys()].map((e, i) => i);
  },
};
</script>


<style scoped lang="stylus">
h1, img, span
  transform: translate(100px, 100px)

span
  font-size: 28px
</style>

<style scoped lang="scss">
.imgSrc {
  width: 300px;
  height: 300px;
  background: url("assets/images/my.jpg") no-repeat;
  background-position: center;
  background-size: cover;
}
.hotDemo:nth-of-type(1) {
  // & span:first-child {
  color: #fff;
  // }
}
</style>