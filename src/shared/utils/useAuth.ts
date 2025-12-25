import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

export const useAuth = () => {
  const userStore = useUserStore()
  const router = useRouter()

  const login = (email: string) => {
    userStore.setUser({ auth: true, email: email })
    localStorage.setItem('auth', 'true')
    localStorage.setItem('email', email)
    router.push('/')
  }
  const logout = () => {
    userStore.logout()
    localStorage.removeItem('auth')
    localStorage.removeItem('email')
    router.push('/login')
  }

  return { login, logout }
}
