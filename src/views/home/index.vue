<script setup>
import Collepse from '@/components/Collepse.vue'
import CollepseItem from '@/components/CollepseItem.vue'
import { ref } from 'vue'
const arrs = ref([
  {
    title: "基本信息",
    value:
      "xxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\n",
  },
  {
    title: "创新点(0)",
    value:
      "xxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\n",
  },
  {
    title: "附件(0)",
    value:
      "xxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\n",
  },
  {
    title: "发明人 (0) ",
    value:
      "xxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\n",
  },
  {
    title: "奖励人 (0) ",
    value:
      "xxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\nxxxxxx\n",
  },
]);
</script>
<template>
  <div>
    <Collepse>
      <CollepseItem
        v-for="(item, index) in arrs"
        :key="index"
        :title="item.title"
      >
        <pre>{{ item.value }}</pre>
      </CollepseItem>
    </Collepse>
  </div>
</template>

<style lang="scss" scoped></style>
