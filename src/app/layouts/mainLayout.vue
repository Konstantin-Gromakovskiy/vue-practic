<template>
  <app-header/>
  <v-main>
    <slot/>
  </v-main>
  <v-footer style="flex-grow: 0; justify-content: center; ">by Gromakovskiy</v-footer>
</template>

<style scoped>

</style>
<script setup lang="ts">
import AppHeader from '@/components/appHeader.vue'
</script>
