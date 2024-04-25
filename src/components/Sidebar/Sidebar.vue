<template>
  <div class="sidebar-wrapper">
    <el-menu :default-active="defaultActive" router>
      <template v-for="menu in menuList" :key="menu.title">
        <template v-if="menu.children">
          <el-sub-menu :index="menu.title">
            <template #title>
              <span>{{ menu.title }}</span>
            </template>
            <el-menu-item v-for="lvl2 in menu.children" :key="lvl2.title" :index="lvl2.path">{{
              lvl2.title
            }}</el-menu-item>
          </el-sub-menu>
        </template>
        <template v-else>
          <el-menu-item :index="menu.path">
            <span>{{ menu.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script setup>
import { getMenuList } from '@/utils/menuHandler'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const defaultActive = computed(() => {
  return router.currentRoute.value.path
})

const menuList = ref(getMenuList())
</script>

<style lang="scss" scoped>
.sidebar-wrapper {
  height: 100%;

  .el-menu {
    height: 100%;
  }
}
</style>
