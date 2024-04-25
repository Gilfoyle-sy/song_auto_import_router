<template>
  <div class="navbar-wrapper">
    <el-menu :default-active="activeIndex" mode="horizontal" :ellipsis="false">
      <el-menu-item index="1" disabled> 自动化生成模版 </el-menu-item>
      <div class="blank-menu-item"></div>
      <el-menu-item index="2">
        <el-switch v-model="isDark" @change="toggleDark" />
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const activeIndex = ref('1')
</script>

<style lang="scss" scoped>
.navbar-wrapper {
  width: 100%;

  .blank-menu-item {
    flex-grow: 1;
  }
}
</style>
