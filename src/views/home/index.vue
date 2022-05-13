<script setup lang="ts">
import { useRouter, useRoute } from "vue-router";
import {
  h,
  getCurrentInstance,
} from "vue";

const router = useRouter();
const route = useRoute();

const { proxy } = getCurrentInstance() as any;
console.log(proxy, 'proxy')
const dialog = () => (proxy.$message({
  message: h("p", null, [
    h("span", null, "Message can be "),
    h("i", { style: "color: teal" }, "VNode"),
  ]),
}))

</script>

<template>
  首页
  <button @click="() => router.push({ path: '/mine', query: { id: 1 } })">
    跳转mine
  </button>
  <el-row class="mb-4">
    <el-button @click="dialog()">Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<style lang="scss" scoped>
</style>
