<template>
  <div class="logo" v-if="setting.logoHidden">
    <img src="" alt="" />
    <p>{{ setting.title }}</p>
  </div>
</template>

<script lang='ts' setup>
import setting from '@/setting'
</script>

<style lang='scss' scoped>
  .logo {
    width: 100%;
    height: $base-menu-logo-height;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 20px;
    img {
      width: 40px;
      height: 40px;
    }
    p {
      font-size: $base-logo-title-fontSize;
      margin-left: 10px;
    }
  }
</style>