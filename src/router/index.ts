import { createRouter, createWebHistory } from 'vue-router'
import { defineAsyncComponent } from 'vue'
import LoaderComponent from '@/components/LoaderComponent.vue'
import { useUserStore } from '@/stores/user.ts'
import MainPage from '@/pages/MainPage.vue'
import PostPage from '@/pages/PostPage.vue'

const LoginPage = defineAsyncComponent({
  loader: () => import('@/pages/LoginPage.vue'),
  loadingComponent: LoaderComponent,
})

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/login', component: LoginPage },
    { path: '/', component: MainPage, meta: { requiresAuth: true } },
    { path: '/posts', component: PostPage, meta: { requiresAuth: true } },
  ],
})

router.beforeEach((to, from, next) => {
  const isAuth = useUserStore().user.auth
  if (to.meta.requiresAuth && !isAuth) next('/login')
  else next()
})

export default router
