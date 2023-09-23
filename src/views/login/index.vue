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
            <el-button class="login_btn" type="primary" size="default">登录</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts' setup>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive } from 'vue'

const loginForm = reactive({
  username: 'admin',
  password: '111111',
})
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