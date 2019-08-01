// import Login from '@/views/login'

export const constantRoutes = [
  
  // 404 page must be placed at the end !!!
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/ex', meta: { title: 'ex', icon: 'edit' } },
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index'),
    redirect: '/dashboard',
    meta: { title: 'Dashboard', icon: 'edit' },
    children: [{
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'edit' }
    },
    {
      path: '/dashboard2',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'edit' }
    }]
  },
  {
    path: '/example',
    component: () => import('@/layout/index'),
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'delete' },
    children: [
      {
        path: '/table',
        name: 'Table',
        meta: { title: 'Table', icon: 'edit' }
      },
      {
        path: '/tree',
        name: 'Tree',
        meta: { title: 'Tree', icon: 'edit' }
      }
    ]
  }
]
