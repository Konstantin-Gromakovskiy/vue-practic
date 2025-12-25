<template>
  <v-container style="display: flex; flex-direction: column; gap: 10px">
    <h1>Главная страница</h1>
    <my-timer :to-ms="1000" :from-ms="0"/>
  </v-container>
</template>

<script setup lang="ts">
import MyTimer from '@/components/myTimer.vue'
</script>

<style scoped>

</style>
