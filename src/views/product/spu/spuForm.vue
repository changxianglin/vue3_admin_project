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
          v-model:file-list="imgList"
          action="/api/admin/product/fileUpload"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :before-upload="handleUpload"
        >
          <el-icon><Plus /></el-icon>
        </el-upload>

        <el-dialog v-model="dialogVisible">
          <img w-full :src="dialogImageUrl" alt="Preview Image" style='width: 100%; height: 100%;' />
        </el-dialog>
    </el-form-item>
    <el-form-item label="SPU销售属性">
      <el-select v-model="saleAttrAndValueName" :placeholder="unSelectSaleAttr.length ? `还未选择${unSelectSaleAttr.length}个` : '无'">
        <el-option :value='`${item.id}:${item.name}`' v-for="(item, index) in unSelectSaleAttr" :key='item.id' :label="item.name"></el-option>
      </el-select>
      <el-button @click="addSaleAttr" :disabled="saleAttrAndValueName ? false : true" type="primary" icon="Plus" style='margin-left: 10px;'>添加属性</el-button>
      <el-table border style="margin: 10px 0;" :data="saleAttr">
        <el-table-column label="序号" type="index" align="center" width="80px"></el-table-column>
        <el-table-column label="销售属性名称" width="120px" prop='saleAttrName'></el-table-column>
        <el-table-column label="销售属性值" >
          <template #="{row, $index}">
            <el-tag style="margin: 0px 5px;" v-for="(item, index) in row.spuSaleAttrValueList" :key="row.id" @close="row.spuSaleAttrValueList.split(index, 1)">
              {{ item.saleAttrValueName}}
            </el-tag>
            <el-input @blur="toLook(row)" v-model="row.saleAttrValue" v-if="row.flag==true" placeholder="请输入属性值" size='small' style="width: 100px;"></el-input>
            <el-button @click="toEdit(row)" v-else size="small" icon="Plus"></el-button>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="120px">
          <template #="{row, $index}">
            <el-button type="danger" size="small" icon="delete" @click="saleAttr.splice($index, 1)"></el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-form-item>
    <el-form-item>
      <el-button :disabled="saleAttr.length > 0 ? false : true" type="primary" @click="save">保存</el-button>
      <el-button @click="cancel">取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang='ts' setup>
import { ref, computed } from "vue";
import type { 
  SpuData, AllTradeMark, 
  SpuHasImg, SaleAttrResponseData, 
  HasSaleAttrResponseData,Trademark, 
  SpuImg, SaleAttrValue,
  SaleAttr,
  HasSaleAttr} from "@/api/product/spu/type";
import { 
  reqAllTradeMark, reqSpuImageList, 
  reqAllSaleAttr, reqSpuHasSaleAttr,
  reqAddOrUpdateSpu,
 } from "@/api/product/spu";
import { ElMessage } from "element-plus";
import { Flag } from "@element-plus/icons-vue";
const  $emits = defineEmits(['changeScene'])

const cancel = () => {
  $emits('changeScene', {
    flag: 0,
    params: 'update',
  })
}

const AllTradeMark = ref<Trademark[]>([])
const imgList = ref<SpuImg[]>([])
const saleAttr = ref<SaleAttr[]>([])
const allSaleAttr = ref<HasSaleAttr[]>([])
const dialogVisible = ref<boolean>(false)
const dialogImageUrl = ref<string>('')
const SpuParams = ref<SpuData>({
  category3Id: '',
  description: '',
  spuName: '',
  tmId: '',
  spuImageList: [],
  spuSaleAttrList: [],
})

const saleAttrAndValueName = ref<string>('')

const initHasSpuData = async (spu: SpuData) => {
  SpuParams.value = spu
  const result: AllTradeMark = await reqAllTradeMark()
  const result1: SpuHasImg = await reqSpuImageList((spu.id as number))
  const result2: SaleAttrResponseData = await reqSpuHasSaleAttr((spu.id as number))
  const result3: HasSaleAttrResponseData = await reqAllSaleAttr()
  AllTradeMark.value = result.data
  imgList.value = result1.data.map((item) => {
    return {
      name: item.imgName,
      url: item.imgUrl,
    }
  })
  saleAttr.value = result2.data
  allSaleAttr.value = result3.data
}

const handlePictureCardPreview = (file: any) => {
  dialogImageUrl.value = file.url
  dialogVisible.value = true
}

const handleRemove = () => {
  console.log('delete image')
}

const handleUpload = (file: any) => {
  if(file.type == 'image/png' || file.type == 'image/jpeg' || file.type == 'image/gif') {
    if(file.size / 1024 / 1024 < 3) {
      return true
    } else {
      ElMessage({
        type: 'error',
        message: '支持的文件请小于3M'
      })
      return false
    }
  } else {
    ElMessage({
      type: 'error',
      message: '支持的文件格式为 png|jpeg|gif'
    })
    return false
  }
}

const unSelectSaleAttr = computed(() => {
  const unSelectArr = allSaleAttr.value.filter((item) => {
    return saleAttr.value.every(item1 => {
      return item.name != item1.saleAttrName
    })
  })

  return unSelectArr
})

const addSaleAttr = () => {
  const [baseSaleAttrId, saleAttrName] = saleAttrAndValueName.value.split(':')
  const newSaleAttr: SaleAttr = {
    baseSaleAttrId, 
    saleAttrName,
    spuSaleAttrValueList: [],
  }

  saleAttr.value.push(newSaleAttr)
  saleAttrAndValueName.value = ''
}

const toEdit = (row: SaleAttr) => {
  row.flag = true
  row.saleAttrValue = ''
}

const toLook = (row: SaleAttr) => {
  const { baseSaleAttrId, saleAttrValue } = row 
  const newSaleAttrValue: SaleAttrValue = {
    baseSaleAttrId,
    saleAttrValueName: (saleAttrValue as string),
  }

  if(saleAttrValue?.trim() == '') {
    ElMessage({
      type: 'error',
      message: '属性值不能为空',
    })
    return 
  }

  const repeat = row.spuSaleAttrValueList.find((item) => {
    return item.saleAttrValueName == saleAttrValue
  })
  if(repeat) {
    ElMessage({
      type: 'error',
      message: '属性值不能重复',
    })
    return 
  }

  row.spuSaleAttrValueList.push(newSaleAttrValue)

  row.flag = false
}

const save = async () => {
  SpuParams.value.spuImageList = imgList.value.map((item: any) => {
    return {
      imgName: item.name,
      imgUrl: (item.response&&item.response.data) || item.url,
    }
  })

  SpuParams.value.spuSaleAttrList = saleAttr.value

  let result =  await reqAddOrUpdateSpu(SpuParams.value)

  if(result.code == 200) {
    ElMessage({
      type: 'success',
      message: SpuParams.value.id ? '更新成功' : '添加成功'
    })
    $emits('changeScene', {
      flag: 0,
      params: SpuParams.value.id ? 'update': 'add'
    })
  } else {
    ElMessage({
      type: 'error',
      message: SpuParams.value.id ? '更新失败' : '添加失败'
    })
  }
}

const initAddSpu = async (c3Id: number|string) => {
  Object.assign(SpuParams.value, {
    category3Id: '',
    description: '',
    spuName: '',
    tmId: '',
    spuImageList: [],
    spuSaleAttrList: [],
  })
  imgList.value = []
  saleAttr.value = []
  saleAttrAndValueName.value = ''
  SpuParams.value.category3Id = c3Id
  const result: AllTradeMark = await reqAllTradeMark()
  const result1: HasSaleAttrResponseData = await reqAllSaleAttr()
  AllTradeMark.value = result.data
  allSaleAttr.value = result1.data
}

defineExpose({initHasSpuData, initAddSpu})
</script>

<style lang='less' scoped>

</style>