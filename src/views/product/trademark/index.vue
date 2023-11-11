<template>
  <el-card class="box-card">
    <!-- button -->
    <el-button type="primary" size="default" icon="Plus" @click="">添加品牌</el-button>
    <!-- table -->
    <el-table style="margin: 10px 0px;" border :data="trademark">
      <el-table-column label="序号" width="80px" align="center" type="index"></el-table-column>
      <el-table-column label="品牌名称" prop="tmName"></el-table-column>
      <el-table-column label="品牌LOGO">
        <template #="{ row, $index }">
          <img :src="row.logoUrl" style="width: 100px; height: 100px;" />
        </template>
      </el-table-column>
      <el-table-column label="品牌操作">
        <template #="{ row, $index }">
          <el-button type="primary" size="small" icon="Edit"></el-button>
          <el-button type="danger" size="small" icon="Delete"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <el-pagination page-count="" v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]" :background="true"
      layout="prev, pager, next, jumper, ->, sizes, total," :total="total" @size-change="handleSizeChange"
      @current-change="handleCurrentChange" />
  </el-card>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import { reqHasTrademark } from '@/api/product/trademark'
import type { TradeMarkResponseData, Records } from '@/api/product/trademark/type'
const pageNo = ref<number>(1)
const limit = ref<number>(3)
const total = ref<number>(0)
const trademark = ref<Records>([])

onMounted(() => {
  getHasTrademark()
})

const getHasTrademark = async () => {
  const result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == 200) {
    total.value = result.data.total
    trademark.value = result.data.records
  }
}

const handleSizeChange = () => {
  console.log(1234)
}

const handleCurrentChange = () => {
  console.log(34)
}
</script>

<style lang='less' scoped></style>