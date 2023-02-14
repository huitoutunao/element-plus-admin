<template>
  <div class="wrapper" @click="counter.increment()">
    {{ countValue }}
  </div>
  <el-button type="primary">Primary</el-button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCounterStore } from '@/store/modules/useCounterStore'

const counter = useCounterStore()
const { countValue } = storeToRefs(counter)
</script>

<style lang="scss" scoped>
.wrapper {
  position: relative;
}
</style>
