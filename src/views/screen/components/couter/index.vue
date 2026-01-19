<template>
  <div class="box8">
    <div class="title">
      <p>数据统计</p>
      <img src="../../images/dataScreen-title.png" alt="" srcset="">
    </div>
    <div class="charts" ref="charts"></div>
  </div>
</template>

<script lang='ts' setup>
import * as echarts from 'echarts'
import { ref, onMounted } from 'vue'

const charts = ref()

onMounted(() => {
  const myCharts = echarts.init(charts.value)
  const option = {
    title: {
      text: '游客消费水平',
      textStyle: {
        color: 'white',
      },
    },
    radar: {
      indicator: [
        { name: '消费', max: 6500 },
        { name: '好感度', max: 16500 },
        { name: '出行', max: 36500 },
        { name: '小吃', max: 66500 },
        { name: '爱好', max: 26500 },
        { name: '景点', max: 96500 },
      ]
    },
    series: [
      {
        name: '',
        type: 'radar',
        data: [
          {
            value: [4200, 3000, 2000, 3500, 5000, 18000],
            name: '购物'
          }
        ]
      }
    ]
  }

  myCharts.setOption(option)
})

</script>

<style lang='scss' scoped>
.box8 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;

  .title {
    p {
      color: #fff;
      font-size: 18px;
    }
  }

  .charts {
    height: calc(100% - 30px);
  }
}
</style>