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
    }
  })
})
</script>

<style lang='less' scoped>

</style>