<template>
      <el-icon style="margin-right: 10px;" @click="changeIcon">
        <component :is="LayoutSettingStore.fold ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <!--  -->
      <el-breadcrumb separator-icon="ArrowRight">
        <el-breadcrumb-item v-for="(item, index) in route.matched" :key="index" v-show="item.meta.title" :to="item.path">
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router'
import userLayoutSettingStore from '@/store/modules/setting.ts'

const route = useRoute()

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