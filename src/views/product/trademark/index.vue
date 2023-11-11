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
    <!-- pagination -->
    <el-pagination 
      v-model:current-page="pageNo" 
      v-model:page-size="limit" 
      :page-sizes="[3, 5, 7, 9]"
        :background="true" 
        layout="prev, pager, next, jumper, ->, sizes, total,"
        :total="400" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange" 
      />
  </el-card>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
const pageNo = ref<number>(1)
const limit = ref<number>(3)
</script>

<style lang='less' scoped></style>