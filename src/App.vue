<template>
  <!-- <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>

    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div> -->
  <div>
    <h3>svg test</h3>
    <SvgIcon />
  </div>
</template>

<script setup lang="ts">
  // import { Plus, Edit, Delete } from '@element-plus/icons-vue'
  import SvgIcon from '@/components/SvgIcon/index.vue'
</script>

<style scoped>
</style>