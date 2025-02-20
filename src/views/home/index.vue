<template>
 <el-card>
  <div class="box">
    <img :src="userStore.avatar" class="avatar" />
  <div class="bottom">
    <h3 class="title">{{getTime()}}好呀{{ userStore.username }}</h3>
    <p class="subTitle">最好的运营平台</p>
  </div>
  </div>
 </el-card>
 <svg-icon name='welcome'></svg-icon>
</template>

<script lang='ts' setup>
import useUserStore from '@/store/modules/user';
import { getTime } from '@/utils/time';

let userStore = useUserStore()
</script>

<style scoped lang="scss">
.box {
  display: flex;
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }
  .bottom {
    margin-left: 20px;
      .title {
        font-size: 30px;
        font-weight: 900;
        margin-bottom: 30px;
      }
      .subTitle {
        font-style: italic;
        color: skyblue;
      }
  }
}
</style>