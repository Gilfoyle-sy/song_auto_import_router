<template>
  <div class="home-page">
    <el-container>
      <el-header>
        <Navbar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Sidebar />
        </el-aside>
        <el-main>
          <RouterView />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import Navbar from '@/components/Navbar/Navbar.vue'
import Sidebar from '@/components/Sidebar/Sidebar.vue'
</script>

<style lang="scss" scoped>
.home-page {
  height: 100%;

  .el-container {
    height: 100%;
  }
}
</style>
