import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/home/index-view.vue'
import LoginView from '@/views/login/index-view.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('../views/AboutView.vue'),
  // },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
