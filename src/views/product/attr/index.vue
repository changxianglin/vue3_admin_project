<template>
    <Category :scene="scene" />
    <el-card style="margin: 10px 0;">
      <div v-show="scene == 0">
        <el-button type="primary" size="default" icon="Plus" :disabled="!categoryStore.c3Id" @click="addAttr">添加属性</el-button>
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
              <el-button type="primary" size="small" icon="Edit" @click="updateAttr"></el-button>
              <el-button type="primary" size="small" icon="Delete"></el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>
    <div v-show="scene == 1">
      <el-form :inline="true">
        <el-form-item label="属性名称">
          <el-input palceholder="请输入属性名称" v-model="attrParams.attrName"></el-input>
        </el-form-item>
      </el-form>
      <el-button :disabled="attrParams.attrName ? false : true" icon='Plus' type="primary" @click="addAttrValue">添加属性</el-button>
      <el-button @click="cancel">取消</el-button>
      <el-table border style="margin: 10px 0px;" :data="attrParams.attrValueList">
        <el-table-column label="序号" width="80px" type="index" align="center"></el-table-column>
        <el-table-column label="属性值">
          <template #="{row, $index}">
            <input placeholder="请输入属性值名称" v-model="row.valueName" />
          </template>
        </el-table-column>
        <el-table-column label="属性值操作"></el-table-column>
      </el-table>
      <el-button type="primary" @click="save">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </div>
    </el-card>
</template>

<script lang='ts' setup>
import { watch, ref, reactive } from 'vue';
import { reqAttr, reqAddOrUpdateAttr } from '@/api/product/attr';
import type { AttrResponseData, Attr } from '@/api/product/attr/type';

import useCategoryStore from '@/store/modules/category';
import { ElMessage } from 'element-plus';
const categoryStore = useCategoryStore()

const attrArr = ref<Attr[]>([])
const scene = ref<number>(0)

const attrParams = reactive<Attr>({
  attrName: '',
  attrValueList: [],
  categoryId: '',
  categoryLevel: 3,
})

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

const addAttr = () => {
  Object.assign(attrParams, {
      attrName: '',
      attrValueList: [],
      categoryId: categoryStore.c3Id,
      categoryLevel: 3,
  })
  scene.value = 1
}

const updateAttr = () => {
  scene.value = 1
}

const cancel = () => {
  scene.value = 0
}

const addAttrValue = () => {
  attrParams.attrValueList.push({
    valueName: '',
  })
}

const save = async () => {
  const result: any = await reqAddOrUpdateAttr(attrParams)
  if(result.code == 200) {
    scene.value = 0
    ElMessage({
      type: 'success',
      message: attrParams.id ? '修改成功': '添加成功'
    })
    getAttr()
  } else {
    ElMessage({
      type: 'error',
      message: attrParams.id ? '修改失败': '添加失败'
    })
  }
}
</script>

<style lang='less' scoped>

</style>