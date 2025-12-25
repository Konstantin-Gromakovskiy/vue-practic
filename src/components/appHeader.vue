<template>
  <v-app-bar color="primary">
    <v-app-bar-title>Messenger</v-app-bar-title >
    <v-tabs >
      <v-tab to="/" value="/">Главная</v-tab>
      <v-tab to="/posts" value="/posts">Посты</v-tab>
    </v-tabs>
    <v-spacer/>
    <v-btn @click="logout" v-if="user.auth" >
      <v-icon style="width: 24px; height: 24px;" :icon="mdiLogout" />
    </v-btn>
  </v-app-bar>
</template>

<script setup lang="ts">
import { mdiLogout } from '@mdi/js'
import { useAuth } from '@/shared/utils/useAuth'
import { useUserStore } from '@/stores/user'

const user = useUserStore().user
const { logout } = useAuth()

</script>
