<template>
      <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
      <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
      <el-button size="small" icon="Setting" circle></el-button>
      <img src="../../../../public/vite.svg" alt="" style="width: 24px; height: 24px; margin: 0 10px;" />
      <!-- dropdown -->
      <el-dropdown>
        <span class="el-dropdown-link">
          admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
</template>

<script lang='ts' setup>
import userLayoutSettingStore from '@/store/modules/setting';

const layoutSettingStore = userLayoutSettingStore()

const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  const full = document.fullscreenElement
  if(!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style lang='scss' scoped>

</style>