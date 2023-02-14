<template>
  <div class="app-page">
    <el-container>
      <el-aside width="200px">
        <el-scrollbar>
          <el-menu>
            <el-sub-menu index="1">
              <template #title>
                <el-icon><i-ep-location /></el-icon>
                <span>Navigator One</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="1-1">item one</el-menu-item>
                <el-menu-item index="1-2">item two</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <el-sub-menu index="2">
              <template #title>
                <el-icon><i-ep-location /></el-icon>
                <span>Navigator Two</span>
              </template>
              <el-menu-item-group title="Group One">
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
          </el-menu>
        </el-scrollbar>
      </el-aside>
      <el-container>
        <el-header>456</el-header>
        <el-main>789</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
// import { ref } from 'vue'
</script>

<style lang="scss" scoped>
.app-page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
