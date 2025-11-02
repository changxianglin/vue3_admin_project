<template>
  <div class="map" ref="map">
    map component
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'
import chinaJson from './china.json'

echarts.registerMap('china', chinaJson)
const map = ref()

onMounted(() => {
  const mycharts = echarts.init(map.value)

  mycharts.setOption({
    geo: {
      map: 'china',
      roam: true,
      left: 50,
      top: 100,
      right: 50,
      bottom: 50,
      label: {
        show: true,
      }
    },
    grid: {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0,
    },
    series: [
      {
        type: 'lines',
        data: [
          
        ]
      }
    ]
  })
})
</script>

<style lang='less' scoped>

</style>