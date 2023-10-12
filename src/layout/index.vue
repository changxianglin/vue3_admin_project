<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <!-- menu scroller -->
      <el-scrollbar class="scrollbar">
        <el-menu background-color="#001529" text-color="#fff">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">数据大屏</el-menu-item>
          <!-- 折叠 -->
          <el-sub-menu index="3">
            <template #title>
              <span>权限管理</span>
            </template>
            <el-menu-item index="2-1">用户管理</el-menu-item>
            <el-menu-item index="2-2">角色管理</el-menu-item>
            <el-menu-item index="2-3">菜单管理</el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-scrollbar>
    </div>
    <div class="layout_tabbar"></div>
    <div class="layout_main"></div>
  </div>
</template>

<script lang='ts' setup>
import Logo from './logo/index.vue'
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