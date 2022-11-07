<script setup lang="ts">
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
console.log(useI18n().t, 'useI18n');

</script>

<template>
  <div>
  {{ t('message.home') }}
  </div>
  
</template>

<style lang="scss" scoped></style>
