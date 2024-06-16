<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select v-model="categoryStore.c1Id" @change="handler">
            <el-option :label="c1.name" v-for="(c1, index) in categoryStore.c1Arr" :key="c1.id" :value="c1.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select v-model="categoryStore.c2Id" @change="handler1">
            <el-option v-for="(c2, index) in categoryStore.c2Arr" :key="c2.id" :label="c2.name" :value="c2.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select v-model="categoryStore.c3Id">
            <el-option :label="c3.name" v-for="(c3, index) in categoryStore.c3Arr" :key="c3.id" :value="c3.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import useCategoryStore from '@/store/modules/category';

const categoryStore = useCategoryStore()

onMounted(() => {
  getC1()
})

const getC1 = async () => {
  categoryStore.getC1()
}

const handler = () => {
  categoryStore.c2Id = ''
  categoryStore.c3Arr = []
  categoryStore.c3Id = ''
  categoryStore.getC2()
}

const handler1 = () => {
  categoryStore.c3Id = '' 
  categoryStore.getC3()
}
</script>

<style lang='less' scoped>

</style>