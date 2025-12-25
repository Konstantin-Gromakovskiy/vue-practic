<template>
  <v-container class="d-flex justify-center align-center" v-if="posts.length === 0">
    <LoaderComponent />
  </v-container>
  <v-container v-else class="d-flex flex-column justify-center" style="gap: 20px">
    <v-card v-for="post in filteredPosts" :key="post.id" variant="tonal" >
      <v-card-title>{{ post.title }}</v-card-title>
      <v-card-text>{{ post.body }}</v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts" setup>
import { onMounted, computed, withDefaults } from 'vue'
import axios from 'axios'
import { usePostsStore } from '@/stores/posts'
import LoaderComponent from '@/components/LoaderComponent.vue'
import type { Post } from '@/stores/store.types.ts'

const props = withDefaults(defineProps<{ search?: string }>(), { search: '' })
const { posts, addPost } = usePostsStore()

const filteredPosts = computed(() => {
  if (!props.search) return posts
  return posts.filter(post => post.title.toLowerCase().includes(props.search.toLowerCase()))
})
onMounted(() => {
  if (posts.length === 0) {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10').then((response) => {
      response.data.forEach((post: Post) => {
        addPost(post)
      })
    })
  }
})

</script>

<style scoped>

</style>
