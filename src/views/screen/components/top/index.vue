<template>
  <div class="top">
    <div class="left">
      <div class="lbtn" @click="goHome">首页</div>
    </div>
    <div class="center">
      <div class="title">智慧旅游可视化大数据平台</div>
    </div>
    <div class="right">
      <span class="rbtn">统计报名</span>
      <span class="time">当前时间: {{ time }}</span>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted, onBeforeMount } from 'vue';
import { useRouter } from 'vue-router';
import moment from 'moment'

const router = useRouter()

const time = ref(moment().format('YYYY年MM月DD日 hh:mm:ss'))
const timer = ref()

const goHome = () => {
  router.push('/home')
}

onMounted(() => {
  timer.value = setInterval(() => {
    time.value = moment().format('YYYY年MM月DD日 hh:mm:ss')
  }, 1000);
})

onBeforeMount(() => {
  clearInterval(time.value)
})
</script>

<style lang='scss' scoped>
  .top {
    width: 100%;
    height: 40px;
    display: flex;
    .left {
      flex: 1.5;
      background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
      background-size: cover;
      .lbtn {
        width: 150px;
        height: 40px;
        float: right;
        background: url(../../images/dataScreen-header-btn-bg-l.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 40px;
        color: #29fcff;
        font-size: 20px;
      }
    }
    .center {
      flex: 2;
      .title {
        width: 100%;
        height: 74px;
        background: url(../../images/dataScreen-header-center-bg.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 74px;
        color: #29fcff;
        font-size: 30px;
      }
    }
    .right {
      flex: 1.5;
      background: url(../../images/dataScreen-header-left-bg.png) no-repeat;
      background-size: cover;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .rbtn {
        width: 150px;
        height: 40px;
        background: url(../../images/dataScreen-header-btn-bg-r.png) no-repeat;
        background-size: 100% 100%;
        text-align: center;
        line-height: 40px;
        color: #29fcff;
      }
      .time {
        color: #29fcff;
        font-size: 20px;
      }
    }
  }
</style>