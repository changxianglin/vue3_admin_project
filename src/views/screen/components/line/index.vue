<template>
  <div class="line">
    <div class="title">
      <p>未来7天游客数量趋势图</p>
      <img src="../../images/dataScreen-title.png" alt="" srcset="">
    </div>
    <div class="charts" ref="line">

    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

const line = ref()

onMounted(() => {
  const myCharts = echarts.init(line.value)
  myCharts.setOption({
    title: {
      text: '访问量'
    },
    xAxis: {
      type: 'category',
      // 两侧不留白
      boundaryGap: false,
      splitLine: {
        show: false,
      },
      data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      }
    },
    yAxis: {
      splitLine: {
        show: false,
      },
      axisLine: {
        show: true,
      },
      axisTick: {
        show: true,
      }
    },
    grid: {
      left: 40,
      top: 0,
      bottom: 20,
      right: 20,
    },
    series: [
      {
        type: 'line',
        data: [120, 1240, 66, 2299, 321, 890, 1200],
        smooth: true,
        areaStyle: {
          color: {
            type: 'line',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0, color: 'red',
              },
              {
                offset: 1, color: 'blue',
              }
            ],
            global: false,
          }
        }
      }
    ]
  })
})
</script>

<style lang='scss' scoped>
.line {
  width: 100%;
  height: 100%;
  background: url(../../images/dataScreen-main-cb.png) no-repeat;
  background-size: 100% 100%;
  margin: 0 20px;

  .title {
    margin-left: 10px;

    p {
      color: #fff;
      font-size: 20px;
    }
  }

  .charts {
    height: calc(100% - 40px);
  }
}
</style>