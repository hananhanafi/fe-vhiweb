import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import AppLayout from '@/components/layouts/AppLayout.vue'

const routes = [
    {
      path: '/',
      name: "Login",
      meta: {
        title: "Welcome"
      },
      component: () => import('../views/Login.vue'),
    },
    {
      path: '/users',
      name: 'Users',
      meta: {
        title: "Users",
        requiresAuth: true,
        layout: AppLayout
      },
      component: () => import('../views/Users/Index.vue'),
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      meta: {
        title: "User Detail",
        requiresAuth: true,
        layout: AppLayout
      },
      component: () => import('../views/Users/Detail.vue'),
    },
    {
      path: '/:catchAll(.*)*',
      name: "PageNotFound",
      component: () => import('../views/404.vue'),    },
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, _from, next) => {
    // If the route has a title, set it as the page title of the document/page
    const title = to.meta.title
    if (title) {
      document.title = title + ' | ' + import.meta.env.VITE_APP_NAME
    }else{
      document.title = import.meta.env.VITE_APP_NAME
    }

    // Check if the route requires authentication & if the user is authenticated
    if (to.matched.some(record => record.meta.requiresAuth) && !store.getters['auth/isAuthenticated']) {
        // Redirect to the login page
        next({ path: '/' })
    }

    if (to.matched.some(record => record.name === 'Login') && store.getters['auth/isAuthenticated']) {
        // Redirect to the users page if user already logged in
        next({ path: '/users' })
    }

    return next()
  })
export default router
