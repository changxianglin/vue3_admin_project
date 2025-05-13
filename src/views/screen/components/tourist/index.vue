<template>
  <div class=box>
    <div class="top">
      <p class="title">实时游客统计</p>
      <p class="bg"></p>
      <p class="right">可预约总量<span>999999</span>人</p>
    </div>
    <div class="number">
      <span v-for="(item, index) in pople" :key="index">{{ item }}</span>
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import 'echarts-liquidfill'
const pople = ref<string>('216908人')

const charts = ref()

onMounted(() => {
  const mycharts = echarts.init(charts.value)
  mycharts.setOption({
    title: {
      text: '水球图'
    },
    xAxis: {},
    yAxis: {},
    series: {
      type: 'liquidFill',
      data: [0.6, 0.4, 0.2],
      radius: '100%',
    },
    grid: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    }
  })
})
</script>

<style lang='scss' scoped>
  .box {
    background: url(../../images/dataScreen-main-lb.png) no-repeat;
    background-size: 100% 100%;
    margin-top: 10px;
    .top {
      margin-left: 20px;
      .title {
        color: #fff;
        font-size: 20px;
      }
      .bg {
        width: 68px;
        height: 7px;
        background: url(../../images/dataScreen-title.png) no-repeat;
        background-size: 100% 100%;
        margin-top: 10px;
      }
      .right {
        float: right;
        font-size: 20px;
        color: #fff;
        span {
          color: yellowgreen;
        }
      }
    }
    .number {
      padding: 10px;
      margin-top: 30px;
      display: flex;
      span{
        flex: 1;
        height: 40px;
        line-height: 40px;
        text-align: center;
        background: url(../../images/total.png) no-repeat;
        background-size: 100% 100%;
        color: #29fcff;
      }
    }
    .charts {
      width: 100%;
      height: 240px;
    }
  }
</style>