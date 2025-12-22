<template>
  <v-layout>
    <v-app-bar color="primary">
      <v-app-bar-title>Messager</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-icon :icon="mdiLogin" />
    </v-app-bar>
    <slot/>
  </v-layout>
</template>

<script setup lang="ts">
import { mdiLogin } from '@mdi/js'
</script>
<style scoped>

</style>
