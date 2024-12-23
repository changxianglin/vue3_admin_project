<template>
  <div>
    <Category :scene="scene"></Category>

    <el-card style="margin: 10px 0px;">
      <el-button type="primary" icon="Plus" :disabled="categoryStore.c3Id ? false : true">添加 SPU</el-button>

      <el-table style="margin: 10px 0;" border :data="records">
        <el-table-column label="序号" type="index" align="center" width="80"></el-table-column>
        <el-table-column label="SPU名称" prop="spuName"></el-table-column>
        <el-table-column label="SPU描述" prop="description" show-overflow-tooltip></el-table-column>
        <el-table-column label="SPU操作">
          <template #default="scope">
            <el-button  size="small" icon="Plus" title="添加SKU"></el-button>
            <el-button type="info" size="small" icon="Edit" title="修改SKU"></el-button>
            <el-button type="primary" size="small" icon="View" title="添加SKU"></el-button>
            <el-button type="primary" size="small" icon="Delete" title="添加SKU"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-pagination
      v-model:current-page="pageNo"
      v-model:page-size="pageSize"
      :page-sizes="[3, 5, 7, 9]"
      :background="true"
      layout="prev, pager, next, jumper, ->, sizes, total"
      :total="total"
      @current-change="getHasSpu"
      @size-change="changeSize"
    />
  </div>
</template>

<script lang='ts' setup>
import type { HasSpuResponseData, Records } from "@/api/product/spu/type";
import { ref, watch } from "vue";
import useCategoryStore from "@/store/modules/category";
import { reqHasSpu } from "@/api/product/spu";

  const categoryStore = useCategoryStore()

  const records = ref<Records>([])
  const scene = ref<number>(0)
  const pageNo = ref<number>(1)
  const pageSize = ref<number>(3)
  const total = ref<number>(0)

  watch(() => categoryStore.c3Id, () => {
    if(!categoryStore.c3Id) return
    getHasSpu()
  })

  const getHasSpu = async (pager = 1) => {
    pageNo.value = pager
    const result:HasSpuResponseData = await reqHasSpu(pageNo.value, pageSize.value, categoryStore.c3Id)
    if(result.code == 200) {
      records.value = result.data.records
      total.value = result.data.total
    }
  }

  const changeSize = () => {
    getHasSpu()
  }
</script>

<style lang='less' scoped>

</style>