import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'
import SettingsPage from '@/components/SettingsPage.vue'
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
  { path: '/settings', name: 'settings', component: SettingsPage, meta: { requiresAuth: true } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    return { name: 'login' }
  }
})

export default router
