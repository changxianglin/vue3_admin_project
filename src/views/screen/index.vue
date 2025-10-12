<template>
  <div class="container">
    <div class="screen" ref="screen">
      <div class="top">
        <Top />
      </div>
      <div class="bottom">
        <div class="left">
          <Tourist class="tourtist"/>
          <Sex class="sex"/>
          <Age class="age"/>
        </div>
        <div class="center">
          <Map />
          <Line />
        </div>
        <div class="right">right</div>
      </div>
    </div>
  </div>
</template>

<script lang='ts' setup>
import { ref, onMounted } from 'vue'
import Top from './components/top/index.vue'
import Tourist from './components/tourist/index.vue'
import Sex from './components/sex/index.vue'
import Age from './components/age/index.vue'
import Map from './components/map/index.vue'
import Line from './components/line/index.vue'

const screen = ref()

onMounted(() => {
  screen.value.style.transform = `scale(${getScale()}) translate(-50%, -50%)`
})

function getScale(w = 1920, h = 1080) {
  const ww = window.innerWidth / w
  const wh = window.innerHeight / h
  return ww < wh ? ww : wh 
}
</script>

<style lang='scss' scoped>
  .container {
    width: 100vw;
    height: 100vh;
    background: url(./images/bg.png) no-repeat;
    background-size: cover;
    .screen {
      position: fixed;
      width: 1920px;
      height: 1080px;
      // background: red;
      left: 50%;
      top: 50%;
      transform-origin: left top;
      .top {
        width: 100%;
        height: 40px;
      }
      .bottom {
        display: flex;
        .left {
          flex: 1;
          height: 1040px;
          display: flex;
          flex-direction: column;

          .tourtist {
            flex: 1.2;
          }
          .sex {
            flex: 1;
          }
          .age {
            flex: 1;
          }
        }
        .right {
          flex: 1;
        }
        .center {
          flex: 2;
          display: flex;
          flex-direction: column;
          .map {
            flex: 4;
          }
          .line {
            flex: 1;
          }
        }
      }
    }
  }
</style>