import { defineStore } from 'pinia'
import type { Post } from './store.types'
import { ref } from 'vue'

export const usePostsStore = defineStore('posts', () => {
  const posts = ref<Post[]>([])

  function addPost(post: Post) {
    posts.value.push(post)
  }
  function removePost(id: number) {
    posts.value = posts.value.filter(post => post.id !== id)
  }

  return { posts, addPost, removePost }
})
