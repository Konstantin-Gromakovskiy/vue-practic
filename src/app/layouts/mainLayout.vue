<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Messenger</v-app-bar-title >
    <v-spacer></v-spacer>
    <v-btn @click="logout" v-if="user.auth" >
      <v-icon style="width: 24px; height: 24px;" :icon="mdiLogout" />
    </v-btn>
  </v-app-bar>
  <v-main>
    <slot/>
  </v-main>
  <v-footer style="flex-grow: 0; justify-content: center; ">by Gromakovskiy</v-footer>
</template>

<script setup lang="ts">
import { mdiLogout } from '@mdi/js'
import { useUserStore } from '@/stores/user'

const { user, logout } = useUserStore()

</script>
<style scoped>

</style>
