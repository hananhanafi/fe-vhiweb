import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
      path: '/',
      meta: {
        title: "Selamat Datang"
      },
      component: import('../views/Home.vue'),
    },
    {
      path: '/users',
      name: 'Users',
      meta: {
        title: "Users"
      },
      component: () => import('../views/Users/Index.vue'),
    },
    {
      path: '/users/:id',
      name: 'UserDetail',
      meta: {
        title: "User Detail"
      },
      component: () => import('../views/Users/Detail.vue'),
    }
  ]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title
    // If the route has a title, set it as the page title of the document/page
    if (title) {
      document.title = title + ' - ' + import.meta.env.VITE_APP_NAME
    }else{
      document.title = import.meta.env.VITE_APP_NAME
    }
    return next()
  })
export default router
