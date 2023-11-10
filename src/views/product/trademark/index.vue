<template>
  <el-card class="box-card">
    <!-- button -->
    <el-button type="primary" size="default" icon="Plus" @click="">添加品牌</el-button>
    <!-- table -->
    <el-table style="margin: 10px 0px;" border>
      <el-table-column label="序号" width="80px" align="center"></el-table-column>
      <el-table-column label="品牌名称"></el-table-column>
      <el-table-column label="品牌LOGO"></el-table-column>
      <el-table-column label="品牌操作"></el-table-column>
    </el-table>
  </el-card>
</template>

<script lang='ts' setup>

</script>

<style lang='less' scoped>

</style>