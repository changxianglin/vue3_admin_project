<template>
  <template v-for="(item, index) in menuList" :key="item.path">
    <!-- 无子路由 -->
    <template v-if="!item.children">
      <el-menu-item :index="item.path" v-if="!item.meta.hidden" @click="goRoute">
        <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
        <template #title>
          <span>{{ item.meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 一个子路由 -->
    <template v-if="item.children && item.children.length == 1">
      <el-menu-item :index="item.children[0].path" v-if="!item.children[0].meta.hidden" @click="goRoute">
        <el-icon>
            <component :is="item.children[0].meta.icon"></component>
          </el-icon>
        <template #title>
          <span>{{ item.children[0].meta.title }}</span>
        </template>
      </el-menu-item>
    </template>
    <!-- 多个子路由 -->
    <el-sub-menu :index="item.path" v-if="item.children && item.children.length > 1">
      <template #title>
        <el-icon>
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta.title }}</span>
      </template>
      <Menu :menu-list="item.children" ></Menu>
    </el-sub-menu>
  </template>
</template>

<script lang='ts' setup>
import { useRouter, } from 'vue-router';

const router = useRouter()

defineProps(['menuList'])

const goRoute = (vc: any) => {
  router.push(vc.index)
}
</script>

<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<style lang='scss' scoped>

</style>