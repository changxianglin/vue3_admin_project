<template>
  <div class="tabbar">
    <div class="tabbar_left">
      <Breadcrumb />
    </div>
    <div class="tabbar_right">
      <Setting />
    </div>
  </div>
</template>

<script lang='ts' setup>
import Breadcrumb from './breadcrumb/index.vue'
import Setting from './Setting/index.vue'
</script>

<script lang="ts">
export default {
  name: 'Tabbar',
}
</script>

<style lang='scss' scoped>
.tabbar {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  // background-image: linear-gradient(to right, rgb(232, 223, 223,), rgb(201, 178, 178), rgb(197,165,165));

  .tabbar_left {
    display: flex;
    align-items: center;
    margin-left: 20px;
  }

  .tabbar_right {
    display: flex;
    align-items: center;
  }
}
</style>