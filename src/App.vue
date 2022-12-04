<template>
  <router-view />
</template>

<script setup lang="ts">
import sayHi from '@/utils'
import { lowerFirst } from 'lodash-es'

sayHi()

const a = lowerFirst('ABC')
console.log(a)
</script>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style scoped></style>
