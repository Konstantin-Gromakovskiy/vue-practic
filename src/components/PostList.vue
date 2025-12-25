<template>
  <v-container class="d-flex justify-center align-center" v-if="posts.length === 0">
    <LoaderComponent />
  </v-container>
  <v-container v-else class="d-flex flex-column justify-center" style="gap: 20px">
    <v-card v-for="post in posts" :key="post.id" variant="tonal"  >
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.body }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { usePostsStore } from '@/stores/posts'
import LoaderComponent from '@/components/LoaderComponent.vue'
import type { Post } from '@/stores/store.types.ts'

const { posts, addPost } = usePostsStore()
onMounted(() => {
  axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
    response.data.forEach((post: Post) => {
      addPost(post)
    })
  })
})

</script>

<style scoped>

</style>
