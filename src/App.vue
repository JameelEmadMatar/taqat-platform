<template>
  <router-view/>
</template>
<script setup>
import { onBeforeMount } from 'vue'
import { useUserStore } from './components/Store/User/UserStore'
onBeforeMount(() => {
  useUserStore().loadUserFromCookies()
})
</script>