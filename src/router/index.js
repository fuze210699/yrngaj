import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/vocabulary',
    name: 'Vocabulary',
    component: () => import('../views/Vocabulary.vue')
  },
  {
    path: '/grammar',
    name: 'Grammar',
    component: () => import('../views/Grammar.vue')
  },
  {
    path: '/listening',
    name: 'Listening',
    component: () => import('../views/Listening.vue')
  },
  {
    path: '/speaking',
    name: 'Speaking',
    component: () => import('../views/Speaking.vue')
  },
  {
    path: '/reading',
    name: 'Reading',
    component: () => import('../views/Reading.vue')
  },
  {
    path: '/entertainment',
    name: 'Entertainment',
    component: () => import('../views/Entertainment.vue')
  },
  {
    path: '/lessons',
    name: 'Lessons',
    component: () => import('../views/Lessons.vue')
  },
  {
    path: '/lesson/:id',
    name: 'LessonDetail',
    component: () => import('../views/LessonDetail.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router 