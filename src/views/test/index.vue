<template>
  <h1>test</h1>
  <button>{{ counter }}</button>
  <button @click="add">submit</button>

  <button @click="addC">cache</button>
  <button @click="clear">clear</button>
</template>

<script lang="ts">
export default {
  name: 'test'
}
</script>


<script lang="ts" setup>
import { onActivated, onMounted, ref } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
const counter = ref(1)

const add = () => {
  counter.value += 1
}

const clear = () => {
  localStorage.clear()
}

const addC = () => {
  localStorage.setItem('cache', '1')
}

const init = ref(false)


onActivated(() => {
  console.log('缓存加载')
  const mark = localStorage.getItem('cache')
  console.log('重新加载吗', mark)
})

onBeforeRouteLeave((to, from, next) => {
  console.log('离开界面', to)
  if(to.name == 'home') {
    addC()
  }
  next()
})
</script>