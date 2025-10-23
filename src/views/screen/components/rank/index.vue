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
    }
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