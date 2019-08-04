import Layout from '@/layout'

export const constantRoutes = [
  
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  { 
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true 
  },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        name: 'home',
        meta: { title: 'home', icon: 'lock' }
      }
    ]
  },
  {
    path: '/dashboard',
    component: Layout,
    children: [
      {
        path: 'index',
        component: () => import('@/views/dashboard/index'),
        name: 'dashboard',
        meta: { title: 'dashboard', icon: 'lock' }
      }
    ]
  },
  {
    path: '/A',
    component: Layout,
    meta: {
      title: 'A',
      icon: 'lock'
    },
    children: [
      {
        path: 'a',
        component: () => import('@/views/home/index'),
        name: 'a',
        meta: { title: 'a', icon: 'lock' }
      },
      {
        path: 'b',
        component: () => import('@/views/home/index'),
        name: 'b',
        meta: { title: 'b', icon: 'lock' }
      }
    ]
  }
  
]
