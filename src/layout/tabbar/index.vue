<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <el-icon style="margin-right: 10px;">
        <Expand />
      </el-icon>
      <!--  -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tabbar_right">
      <el-button type="primary" size="small" icon="Refresh" circle></el-button>
    </div>
  </div>
</template>

<script lang='ts' setup>

</script>

<style lang='scss' scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }
}
</style>