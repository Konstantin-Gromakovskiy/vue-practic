import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from './store.types'

export const useUserStore = defineStore('user', () => {
  const user = ref<User>({ auth: localStorage.getItem('auth') === 'true' || false, email: localStorage.getItem('email') || '' })
  function setUser(newValue: User) {
    user.value = newValue
  }
  function logout() {
    user.value = { auth: false, email: '' }
  }

  return { user, setUser, logout }
})
