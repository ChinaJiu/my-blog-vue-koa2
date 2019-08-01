import Layout from '@/layout'

export const constantRoutes = [
  
  // 404 page must be placed at the end !!!
  { path: '/login',
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
