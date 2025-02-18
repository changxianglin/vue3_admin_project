<template>
 <el-card>
  <div class="box">
    <img :src="userStore.avatar" class="avatar" />
  <div>
    <h3>{{getTime()}}好呀{{ userStore.username }}</h3>
    <p>最好的运营平台</p>
  </div>
  </div>
 </el-card>
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
}
</style>