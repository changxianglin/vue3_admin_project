<template>
  <div>
    <el-card>
      <el-form :inline="true">
        <el-form-item label="一级分类">
          <el-select v-model="c1Id">
            <el-option :label="c1.name" v-for="(c1, index) in c1Arr" :key="c1.id" :value="c1.id"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="二级分类">
          <el-select>
            <el-option label="北京"></el-option>
            <el-option label="上海"></el-option>
            <el-option label="广州"></el-option>
            <el-option label="深圳"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="三级分类">
          <el-select>
            <el-option label="北京"></el-option>
            <el-option label="上海"></el-option>
            <el-option label="广州"></el-option>
            <el-option label="深圳"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
import { reqC1 } from '@/api/product/attr'

const c1Arr = ref<any>([])
const c1Id = ref<number|string>('')

onMounted(() => {
  getC1()
})

const getC1 = async () => {
  const result = await reqC1()
  console.log(result)
  if(result.code == 200) {
    c1Arr.value = result.data
  }
}
</script>

<style lang='less' scoped>

</style>