<template>
  <div class="layout_container">
    <div class="layout_slider">
      <Logo />
      <!-- menu -->
      <el-scrollbar class="scrollbar">
        <p v-for="item in 2000" :key="item" class="scrollbar-demo-item">{{item}}</p>
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