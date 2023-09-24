<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">占位文字</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form">
          <h1>Hello</h1>
          <h2>welcome to xxx</h2>
          <el-form-item>
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item>
            <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <el-form-item>
            <el-button :loading="loading" class="login_btn" type="primary" size="default" @click="login">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

const router = useRouter()

const useStore = useUserStore()

const loginForm = reactive({
  username: 'admin',
  password: '111111',
})

const loading = ref<boolean>(false)

const login = async () => {
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    router.push('/')
    ElNotification({
      type: 'success',
      message: '欢迎回来',
      title: `HI, ${getTime()}好`
    })
    loading.value = false
  } catch (error) {
    loading.value = false
    ElNotification({
      type: 'error',
      message: (error as Error).message,
    })
  }
}

</script>

<style lang='scss' scoped>
  .login_container {
    width: 100%;
    height: 100vh;
    background-color: lightblue;

    .login_form {
      position: relative;
      width: 80%;
      top: 30vh;
      h1 {
        color: #fff;
        font-size: 40px;
        margin: 20px 0;
      }
    }
    .login_btn {
      width: 100%;
    }
  }
</style>