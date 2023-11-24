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
          <el-button type="primary" size="small" icon="Edit" @click="updateTrademark"></el-button>
          <el-button type="danger" size="small" icon="Delete" @click="deleteTrademark"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- pagination -->
    <el-pagination page-count="" v-model:current-page="pageNo" v-model:page-size="limit" :page-sizes="[3, 5, 7, 9]"
      :background="true" layout="prev, pager, next, jumper, ->, sizes, total," :total="total"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" />
  </el-card>
  <!-- dialog -->
  <el-dialog v-model="dialogFormVisible" title="添加品牌">
    <el-form style="width: 80%;">
      <el-form-item label="品牌名称" label-width="90px">
        <el-input placeholder="请您输入品牌名称" v-model="trademarkParams.tmName"></el-input>
      </el-form-item>
      <el-form-item label="品牌LOGO" label-width="90px">
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
import { ref, onMounted, reactive } from 'vue'
import { reqHasTrademark, reqAddOrUpdateTrademark } from '@/api/product/trademark'
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
}

const updateTrademark = () => {
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
  const result: any = await reqAddOrUpdateTrademark(trademarkParams)
  if(result.code == 200) {
    dialogFormVisible.value = false
    ElMessage({
      type: 'success',
      message: '添加品牌成功',
    })
    getHasTrademark()
  } else {
    ElMessage({
      type: 'error',
      message: '添加品牌失败'
    })
    dialogFormVisible.value = false
  }
}

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  trademarkParams.logoUrl = response.data
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