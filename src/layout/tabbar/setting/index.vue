<template>
  <el-button size="small" icon="Refresh" circle @click="updateRefsh"></el-button>
  <el-button size="small" icon="FullScreen" circle @click="fullScreen"></el-button>
  <el-popover placement="bottom" title="主题设置" :width="300" trigger="hover">
    <el-form>
      <el-form-item label="主题颜色">
        <el-color-picker @change="setColor" size="small" v-model="color" show-alpha :predefine="predefineColors" />
      </el-form-item>
      <el-form-item size="small" label="暗黑模式">
        <el-switch @change="changeDark" v-model="dark" class="mt-2" style="margin-left: 24px" inline-prompt active-icon="MoonNight"
          inactive-icon="Sunny" />
      </el-form-item>
    </el-form>
    <template #reference>
      <el-button size="small" icon="Setting" circle></el-button>
    </template>
  </el-popover>
  <img :src="userStore.avatar" alt="" style="width: 24px; height: 24px; margin: 0 10px; border-radius: 50%;" />
  <!-- dropdown -->
  <el-dropdown>
    <span class="el-dropdown-link">
      {{ userStore.username }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts' setup>
import { nextTick, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import userLayoutSettingStore from '@/store/modules/setting';
import useUserStore from '@/store/modules/user';

const layoutSettingStore = userLayoutSettingStore()
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const updateRefsh = () => {
  layoutSettingStore.refsh = !layoutSettingStore.refsh
}

const fullScreen = () => {
  const full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}

const logout = async () => {
  console.log('logout')
  await userStore.userLogout()
  nextTick(() => {
    router.push({
      path: '/login',
      query: {
        redirect: route.path
      }
    })
  })
}

const dark = ref<boolean>(false)

const color = ref('rgba(255, 69, 0, 0.68)')
const predefineColors = ref([
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577',
])

const changeDark = () => {
  const html = document.documentElement
  dark.value ? html.className = 'dark' : html.className = ''
}

const setColor = () => {
  const html = document.documentElement
  html.style.setProperty('--el-color-primary', color.value)
}
</script>

<script lang="ts">
export default {
  name: 'Setting',
}
</script>

<style lang='scss' scoped></style>