<template>
  <RouterView v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" v-if="flag"></component>
    </transition>
  </RouterView>
</template>

<script lang='ts' setup>
import { watch, ref, nextTick } from 'vue';
import userLayoutSettingStore from '@/store/modules/setting';

const layoutSettingStore = userLayoutSettingStore()

const flag = ref<boolean>(true)

watch(() => layoutSettingStore.refsh, () => {
  flag.value = false
  nextTick(() => {
    flag.value = true
  })
})
</script>

<script lang="ts">
export default {
  name: 'Main',
}
</script>

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 1s;
}

.fade-enter-to {
  opacity: 1;
}
</style>