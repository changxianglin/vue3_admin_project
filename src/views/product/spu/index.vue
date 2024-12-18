<template>
  <div>
    <Category :scene="scene"></Category>

    <el-card style="margin: 10px 0px;">
      <el-button type="primary" icon="Plus">添加 SPU</el-button>

      <el-table style="margin: 10px 0;" border>
        <el-table-column label="序号" type="index" align="center" width="80"></el-table-column>
        <el-table-column label="SPU名称"></el-table-column>
        <el-table-column label="SPU描述"></el-table-column>
        <el-table-column label="SPU操作"></el-table-column>
      </el-table>
    </el-card>

    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 7, 9]"
      :background="true"
      layout="prev, pager, next, jumper, ->, sizes, total"
      :total="400"
    />
  </div>
</template>

<script lang='ts' setup>
import { ref } from "vue";
  const scene = ref<number>(0)
  const pageNo = ref<number>(1)
  const pageSize = ref<number>(3)
</script>

<style lang='less' scoped>

</style>