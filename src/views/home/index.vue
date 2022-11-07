<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import IndexDB from '@/utils/indexDB'

const { t } = useI18n()
const airbnbDB = new IndexDB('airbnbDB')
// 打开数据库 数据库名称 主键 索引数组
airbnbDB.openStore('elephant', 'id', ['nose', 'ear', 'mouth'])
// 增和改
function addDB(storeName: string) {
  airbnbDB.updateItem(storeName, {id: 1, nose: '修改', ear: '44em', mouth: 'big' })
}
// 删
function deleteDB(storeName: string, id: number) {
  airbnbDB.deleteItem(storeName, id)
}
// 查询所有数据
function getAllData(storeName: string) {
  airbnbDB.getList(storeName)
}
// 查询单条数据
function getData(storeName: string, id: number) {
  airbnbDB.getItem(storeName, id)
}
console.log(useI18n().t, 'useI18n');

</script>

<template>
  <div>
  {{ t('message.home') }}
  <el-button @click="addDB('elephant')">增加数据</el-button>
  <el-button @click="deleteDB('elephant', 2)">删除数据</el-button>
  <el-button @click="getAllData('elephant')">查询所有数据</el-button>
  <el-button @click="getData('elephant', 3)">查询个别数据</el-button>
  </div>
  
</template>

<style lang="scss" scoped></style>
