import Layout from '@/layout'
import Login from '@/views/login'

export const constantRoutes = [
  
  // 404 page must be placed at the end !!!
  { path: '/login', component: Login },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table'
      },
      {
        path: 'tree',
        name: 'Tree'
      }
    ]
  }
]
