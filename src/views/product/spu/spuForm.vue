<template>
  <el-form label-width="100px">
    <el-form-item label="SUP名称">
      <el-input placeholder="请您输入SUP名称" v-model="SpuParams.spuName" />
    </el-form-item>
    <el-form-item label="SUP品牌">
      <el-select v-model="SpuParams.tmId">
        <el-option :label="item.tmName" v-for="item in AllTradeMark" :key="item.id" :value="item.id"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="SUP描述">
      <el-input type="textarea" placeholder="请您输入SUP描述" v-model="SpuParams.description" />
    </el-form-item>
    <el-form-item label="SUP图片">
      <el-upload
          v-model:file-list="fileList"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" />
        </el-dialog>
    </el-form-item>
    <el-form-item label="SPU销售属性">
      <el-select>
        <el-option label="华为"></el-option>
        <el-option label="小米"></el-option>
        <el-option label="oppo"></el-option>
      </el-select>
      <el-button type="primary" icon="Plus" style='margin-left: 10px;'>添加属性值</el-button>
      <el-table border style="margin: 10px 0;">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="销售属性名称" width="120px"></el-table-column>
        <el-table-column label="销售属性值" ></el-table-column>
        <el-table-column label="操作" width="120px"></el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button type="primary">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { ref } from "vue";
import type { 
  SpuData, AllTradeMark, 
  SpuHasImg, SaleAttrResponseData, 
  HasSaleAttrResponseData,Trademark, 
SpuImg,
SaleAttr,
HasSaleAttr} from "@/api/product/spu/type";
import { reqAllTradeMark, reqSpuImageList, reqAllSaleAttr, reqSpuHasSaleAttr } from "@/api/product/spu";
const  $emits = defineEmits(['changeScene'])

const cancel = () => {
  $emits('changeScene', 0)
}

const AllTradeMark = ref<Trademark[]>([])
const imgList = ref<SpuImg[]>([])
const saleAttr = ref<SaleAttr[]>([])
const allSaleAttr = ref<HasSaleAttr[]>([])
const SpuParams = ref<SpuData>({
  category3Id: '',
  description: '',
  spuName: '',
  tmId: '',
  spuImageList: [],
  spuSaleAttrList: [],
})

const initHasSpuData = async (spu: SpuData) => {
  SpuParams.value = spu
  const result: AllTradeMark = await reqAllTradeMark()
  const result1: SpuHasImg = await reqSpuImageList((spu.id as number))
  const result2: SaleAttrResponseData = await reqSpuHasSaleAttr((spu.id as number))
  const result3: HasSaleAttrResponseData = await reqAllSaleAttr()
  AllTradeMark.value = result.data
  imgList.value = result1.data
  saleAttr.value = result2.data
  allSaleAttr.value = result3.data
}

defineExpose({initHasSpuData})
</script>

<style lang='less' scoped>

</style>