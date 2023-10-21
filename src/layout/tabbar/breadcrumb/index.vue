<template>
      <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <!--  -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item>权限管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      </el-breadcrumb>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import userLayoutSettingStore from '@/store/modules/setting.ts'

const LayoutSettingStore = userLayoutSettingStore()

const changeIcon = () => {
  LayoutSettingStore.fold = !LayoutSettingStore.fold
}
</script>

<script lang="ts">
export default {
  name: 'Breadcrumb',
}
</script>

<style lang='scss' scoped>

</style>