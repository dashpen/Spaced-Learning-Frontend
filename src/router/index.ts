import DashboardView from '@/views/DashboardView.vue'
import AppLayout from '@/views/layouts/AppLayout.vue'
import ReviewView from '@/views/ReviewView.vue'
import SubjectsView from '@/views/SubjectsView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name: 'auth',
      component: AppLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DashboardView
        },
        {
          path: '/review',
          name: 'review',
          component: ReviewView
        },
        {
          path: '/subjects',
          name: 'subjects',
          component: SubjectsView
        },
        {
          path: '/account',
          name: 'account',
          component: DashboardView
        }
      ]
    },
  ],
})

export default router
