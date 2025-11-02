<template>
  <div class="box7">
    <div class="title">
      <p>年度游客量对比</p>
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

  myCharts.setOption({
    title: {
      text: '散点图',
      left: '40%',
      textStyle: {
        color: 'white'
      }
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      show: false,
    },
    grid: {
      left: 20,
      top: 20,
      right: 0,
      bottom: 20,
    },
    series: {
      type: 'scatter',
      data: [33, 88, 21, 9, 788, 234, 1213, 1231, 674, 3, 88, 33, 21, 888, 3332, 112, 123, 4, 5, 778, 996, 78],
      symbol: 'diamond',
      symbolSize: 16,
      label: {
        show: true,
      },
    }
  })
})

</script>

<style lang='scss' scoped>
.box7 {
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