<script setup lang="ts">
import { ref } from 'vue';
import zhCn from 'element-plus/lib/locale/lang/zh-cn';
import en from 'element-plus/lib/locale/lang/en';
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const language = ref(zhCn)
const changeLang = (res: any) => {
  language.value = res
  console.log(locale, 'localeLanguage')
  locale.value = res.name
}
</script>

<template>
  <el-config-provider :locale="language">
    <button @click="changeLang(zhCn)">中文</button>
    <button @click="changeLang(en)">英文</button>
    <router-link to="/">home</router-link>
    <router-link to="/mine">mine</router-link>

    <router-view></router-view>
  </el-config-provider>
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
