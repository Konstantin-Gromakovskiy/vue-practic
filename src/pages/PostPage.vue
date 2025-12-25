<template>
  <v-container>
    <v-container style="display: flex; justify-content: space-between; align-items: center; gap: 20px;">
      <h1>Страница постов</h1>
      <v-responsive style="align-items: center;" max-width="300px">
        <v-text-field v-model="search" hide-details style="padding: 10px" variant="outlined" label="Поиск" ></v-text-field>
      </v-responsive>
    </v-container>
    <post-list :search="search"/>
  </v-container>
</template>

<script lang="ts" setup>
import PostList from '@/components/PostList.vue'
import { ref, watchEffect } from 'vue'

const search = ref('')

</script>

<style lang="scss" scoped>

</style>
