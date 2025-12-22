import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from './store.types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ auth: false })
  function setUser(newValue: User) {
    user.value = newValue
  }

  return { user }
})
