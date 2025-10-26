<template>
  <div class="box6">
    <div class="title">
      <p>热门景区排行</p>
      <img src="../../images/dataScreen-title.png" alt="" srcset="">
    </div>
    <div class="charts" ref="charts">

    </div>
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
      text: '景区排行',
      link: 'https://cn.bing.com/',
      left: '50%',
      textStyle: {
        color: 'yellowgreen',
        fontSize: 20,
      },
      subtext: '各大景区排行',
      subtextStyle: {
        color: 'yellowgreen',
        fontSize: 15,
      },
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {},
    grid: {
      left: 20,
      bottom: 20,
      right: 20,
    },
    series: [
      {
        type: 'bar',
        data: [10, 20, 30, 40, 50, 60, 70],
        label: {
          show: true,
          position: 'insideTop',
          color: 'yellowgreen',
        },
        showBackground: true,
        backgroundStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: 'black',
            }, {
              offset: 1, color: 'blue',
            }],
            global: false,
          }
        },
        itemStyle: {
          borderRadius: [10, 10, 0, 0],
          color: function(data: any) {
            const arrs = ['red', 'orange', 'yellowgreen', 'green', 'purple', 'hotpink', 'skyblue']
            return arrs[data.dataIndex]
          }
        }
      },
      {
        type: 'line',
        data: [10, 20, 30, 40, 50, 60, 90],
        smooth: true,
      }
    ],
    tooltip: {},
  })
})

</script>

<style lang='scss' scoped>
.box6 {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 20px 0;

  .title {
    margin-left: 5px;

    p {
      color: #fff;
      font-size: 20px;
    }
  }
  
  .charts {
    height: calc(100% - 30px);
  }
}
</style>