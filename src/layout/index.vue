<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <!-- menu scroller -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="#fff">
          <Menu :menuList="userStore.menuRoutes" />
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main">
      <Main></Main>
    </div>
  </div>
</template>

<script lang='ts' setup>
import Logo from './logo/index.vue'
import Menu from './menu/index.vue'
import Main from './main/index.vue'

import useUserStore from '@/store/modules/user'

let userStore = useUserStore()
</script>

<style lang='scss' scoped>
.layout_container {
  width: 100%;
  height: 100vh;
  color: #fff;
  .layout_slider {
    width: $base-menu-width;
    height: 100vh;
    background: $base-menu-background;

    .scrollbar {
      width: 100%;
      height: calc(100vh - $base-menu-logo-height);
      .el-menu {
        border-right: none;
      }
    }
  }
  .layout_tabbar {
    position: fixed;
    top: 0;
    left: $base-menu-width;
    width: calc(100% - $base-menu-width);
    height: $base-tabbar-height;
    background: cyan;
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
  }
}
</style>