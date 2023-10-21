<template>
  <div class="layout_container">
    <div class="layout_slider" :class="{fload: layoutSettingStore.fold ? true : false}">
      <Logo />
      <!-- menu scroller -->
      <el-scrollbar class="scrollbar">
        <el-menu :collapse="layoutSettingStore.fold ? true : false" background-color="#001529" text-color="#fff" :default-active="route.path">
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar" :class="{fload: layoutSettingStore.fold ? true : false}">
      <Tabbar />
    </div>
    <div class="layout_main" :class="{fload: layoutSettingStore.fold ? true : false}">
      <Main></Main>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router'
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'
import Tabbar from './tabbar/index.vue'

import useUserStore from '@/store/modules/user'
import userLayoutSettingStore from '@/store/modules/setting'

const userStore = useUserStore()
const layoutSettingStore = userLayoutSettingStore()

const route = useRoute()
</script>

<script lang="ts">
export default {
  name: 'Layout',
}
</script>

<style lang='scss' scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;
    color: #fff;
    transition: all 0.3s;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
    &.fload {
      width: $base-menu-min-width;
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    transition: all 0.3s;
    &.fload {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
  .layout_main {
    position: absolute;
    top: $base-tabbar-height;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: calc(100vh - $base-tabbar-height);
    background-color: yellowgreen;
    padding: 20px;
    overflow: auto;
    transition: all 0.3s;
    &.fload {
      width: calc(100vw - $base-menu-min-width);
      left: $base-menu-min-width;
    }
  }
}
</style>