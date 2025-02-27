<template>
  <!-- <div>
    <el-button type="primary" size="default" :icon="Plus">主要按钮</el-button>
    <el-button type="success" size="default" :icon="Edit">编辑按钮</el-button>
    <el-button type="danger" size="default" :icon="Delete">删除按钮</el-button>

    <el-pagination
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </div> -->
    <!-- <h1>test axios request</h1>
    <h1>test</h1>
    <h3>svg test</h3>
    <SvgIcon name="phone" color="red" width="100px" height="100px" /> -->
    <!-- <router-view v-slot="{ Component }">
      <keep-alive :include="[cachesPage]">
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
  // import { Plus, Edit, Delete } from '@element-plus/icons-vue'
  import { onMounted, onUpdated, ref } from 'vue'
  import { reqLogin } from './api/user';
  import { onBeforeRouteUpdate } from 'vue-router';

  const cachesPage = ref('test')

  onMounted(() => {
    // reqLogin({username: 'admin', password: '111111'})
    console.log('每次执行入库')
  })
</script>

<style scoped lang="scss">
  h1 {
    color: $color;
  }
</style>