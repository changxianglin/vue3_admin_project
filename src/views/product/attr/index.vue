<template>
    <Category />
    <el-card style="margin: 10px 0;">
      <el-button type="primary" size="default" icon="Plus" :disabled="!categoryStore.c3Id">添加属性</el-button>
      <el-table border style="margin: 10px 0;" :data="attrArr">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="属性名称" width="120px" prop="attrName"></el-table-column>
        <el-table-column label="属性值名称">
          <template #="{row, index}">
            <el-tag style="margin: 5px;" v-for="(item, index) in row.attrValueList" :key="item.id">{{ item.valueName }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template #="{row, index}">
            <el-button type="primary" size="small" icon="Edit"></el-button>
            <el-button type="primary" size="small" icon="Delete"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
</template>

<script lang='ts' setup>
import { watch, ref } from 'vue';
import { reqAttr } from '@/api/product/attr';
import type { AttrResponseData, Attr } from '@/api/product/attr/type';

import useCategoryStore from '@/store/modules/category';
const categoryStore = useCategoryStore()

const attrArr = ref<Attr[]>([])

watch(() => categoryStore.c3Id, () => {
  attrArr.value = []
  if(!categoryStore.c3Id) return 
  getAttr()
})

const getAttr = async () => {
  const { c1Id, c2Id, c3Id } = categoryStore
  const result: AttrResponseData = await reqAttr(c1Id, c2Id, c3Id)
  if(result.code == 200) {
    attrArr.value = result.data
  }
}
</script>

<style lang='less' scoped>

</style>