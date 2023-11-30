<template>
  <el-card class="box-card">
    <!-- button -->
    <el-button type="primary" size="default" icon="Plus" @click="addTradeMark">添加品牌</el-button>
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
          <el-button type="primary" size="small" icon="Edit" @click="updateTrademark(row)"></el-button>
          <el-popconfirm :title="`您确定要删除${row.tmName}?`" width="280px" icon="Delete" @confirm="removeTrademark(row.id)">
            <template #reference>
              <el-button type="danger" size="small" icon="Delete" @click="deleteTrademark"></el-button>
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <el-pagination page-count="" v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
      :background="true" layout="prev, pager, next, jumper, ->, sizes, total," :total="total"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </el-card>
  <!-- dialog -->
  <el-dialog v-model="dialogFormVisible" :title="trademarkParams.id ? '修改品牌': '添加品牌'">
    <el-form style="width: 80%;" :model="trademarkParams" :rules="rules" ref="formRef">
      <el-form-item label="品牌名称" label-width="100px" prop="tmName">
        <el-input placeholder="请您输入品牌名称" v-model="trademarkParams.tmName"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="100px" prop="logoUrl">
        <el-upload class="avatar-uploader" action="/api/admin/product/fileUpload"
          :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
          <img v-if="trademarkParams.logoUrl" :src="trademarkParams.logoUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
    </el-form>
    <!-- footer -->
    <template #footer>
      <el-button type="parimary" size="default" @click="cancel">取消</el-button>
      <el-button type="parimary" size="default" @click="confirm">确定</el-button>
    </template>
  </el-dialog>
</template>

<script lang='ts' setup>
import type { UploadProps } from 'element-plus'
import { ref, onMounted, reactive, nextTick } from 'vue'
import { reqHasTrademark, reqAddOrUpdateTrademark, reqDeleteTrademark } from '@/api/product/trademark'
import type { TradeMarkResponseData, Records, TradeMark } from '@/api/product/trademark/type'
import { ElMessage } from 'element-plus'

const pageNo = ref<number>(1)
const limit = ref<number>(3)
const total = ref<number>(0)
const trademark = ref<Records>([])
const dialogFormVisible = ref<boolean>(false)
const trademarkParams = reactive<TradeMark>({
  tmName: '',
  logoUrl: '',
})
const formRef = ref()

onMounted(() => {
  getHasTrademark()
})

const getHasTrademark = async (pager: number = 1) => {
  pageNo.value = pager
  const result: TradeMarkResponseData = await reqHasTrademark(pageNo.value, limit.value)
  if (result.code == 200) {
    total.value = result.data.total
    trademark.value = result.data.records
  }
}

const addTradeMark = () => {
  dialogFormVisible.value = true
  trademarkParams.logoUrl = ''
  trademarkParams.tmName = ''
  trademarkParams.id = undefined

  nextTick(() => {
    formRef.value.clearValidate('tmName')
    formRef.value.clearValidate('logoUrl')
  })
}

const updateTrademark = (row: TradeMark) => {
  nextTick(() => {
    formRef.value.clearValidate('tmName')
    formRef.value.clearValidate('logoUrl')
  })
  Object.assign(trademarkParams, row)
  dialogFormVisible.value = true
}

const deleteTrademark = () => {
  console.log('delete')
}

const handleSizeChange = () => {
  getHasTrademark()
}

const handleCurrentChange = (index: number) => {
  getHasTrademark(index)
}

const cancel = () => {
  dialogFormVisible.value = false
}

const confirm = async () => {
  await formRef.value.validate()
  const result: any = await reqAddOrUpdateTrademark(trademarkParams)
  if(result.code == 200) {
    dialogFormVisible.value = false
    ElMessage({
      type: 'success',
      message: trademarkParams.id ? '修改品牌成功' : '添加品牌成功',
    })
    getHasTrademark(trademarkParams.id ? pageNo.value : 1)
  } else {
    ElMessage({
      type: 'error',
      message: trademarkParams.id ? '修改品牌失败' : '添加品牌失败'
    })
    dialogFormVisible.value = false
  }
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  trademarkParams.logoUrl = response.data
  formRef.value.clearValidate('logoUrl')
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.type == 'image/jpeg' || rawFile.type == 'image/png' || rawFile.type == 'image/gif') {
    if (rawFile.size / 1024 / 1024 < 4) {
      return true
    } else {
      ElMessage({
        type: 'error',
        message: '上传文件大小必须小雨 4MB!'
      })
      return false
    }
  } else {
    ElMessage({
      type: 'error',
      message: '上传文件格式务必 PNG|JPG|jpeg'
    })
    return false
  }
}

const validatorTmName = (rule: any, value: any, callback: any) => {
  if(value.trim().length >= 2) {
    callback()
  } else {
    callback(new Error('品牌位数大于等于两位'))
  }
}

const validatorLogoUrl = (rule: any, value: any, callback: any) => {
  if(value) {
    callback()
  } else {
    callback(new Error('LOGO 图片务必上传'))
  }
}

const rules = {
  tmName: [
    {required: true, trigger: 'blur', validator: validatorTmName}
  ],
  logoUrl: [
    { required: true, trigger: 'change', validator: validatorLogoUrl}
  ],
}

const removeTrademark = async (id: number) => {
  const result = await reqDeleteTrademark(id)
  if(result.code == 200) {
    ElMessage({
      type: 'success',
      message: '删除品牌成功'
    })
    getHasTrademark(trademark.value.length > 1 ? pageNo.value : pageNo.value - 1)
  } else {
    ElMessage({
      type: 'error',
      message: '删除品牌失败'
    })
  }
}
</script>

<style scoped>
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>