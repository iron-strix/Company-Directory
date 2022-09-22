import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import LoginPage from '@/components/LoginPage.vue'
import NotFound from '@/components/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: MainPage },
  { path: '/login', name: 'login', component: LoginPage },
  { path: '/:pathMatch(.*)*', name: 'notfound', component: NotFound },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
