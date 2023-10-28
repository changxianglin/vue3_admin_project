<template>
  <div class="home">home</div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import useUserStore from '@/store/modules/user';

const userStore = useUserStore()

onMounted(() => {
  userStore.userInfo()
})
</script>

<style lang='less' scoped>

</style>