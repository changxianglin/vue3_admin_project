<template>
  <div class="login_container">
    <el-row>
      <el-col :span="12" :xs="0">占位文字</el-col>
      <el-col :span="12" :xs="24">
        <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginForms">
          <h1>Hello</h1>
          <h2>welcome to xxx</h2>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
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
import { useRouter, useRoute } from 'vue-router'
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'

const router = useRouter()
const route = useRoute()

const useStore = useUserStore()

const loginForms = ref()

const loginForm = reactive({
  username: 'admin',
  password: 'atguigu123',
})

const loading = ref<boolean>(false)

const login = async () => {
  await loginForms.value.validate()
  loading.value = true
  try {
    await useStore.userLogin(loginForm)
    const redirect: any = route.query.redirect
    router.push({
      path: redirect || '/'
    })
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

const validatorUserName = (rule: any, value: any, callback: any) => {
  if(value.length >= 5) {
    callback()
  } else {
    callback(new Error('账号长度至少5位'))
  }
}

const validatorPaaword = (rule: any, value: any, callback: any) => {
  if(value.length >= 6) {
    callback()
  } else {
    callback(new Error('密码长度至少6位'))
  }
}

const rules = {
  username: [
    // { required: true, min: 6, max: 10, message: '账号长度至少6位', trigger: 'change'}
    { trigger: 'change', validator: validatorUserName,}
  ],
  password: [
    // { required: true, min: 6, max: 15, message: '密码长度至少6位', trigger: 'change',}
    { trigger: 'change', validator: validatorPaaword}
  ],
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