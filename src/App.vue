<template>
  <router-view />
</template>

<script setup lang="ts">
import sayHi from '@/utils'
sayHi()
</script>

<script lang="ts">
export default {
  name: 'App',
}
</script>

<style scoped></style>
