import Layout from '@/layout'

export default {
  path: '/system',
  component: Layout,
  name: 'system',
  meta: { title: '系统管理', icon: 'edit' },
  children: [
    {
      path: 'users',
      name: 'users',
      component: () => import('@/views/system/users'),
      meta: { title: '用户管理', icon: 'edit' }
    },
    {
      path: 'roles',
      name: 'roles',
      component: () => import('@/views/system/roles'),
      meta: { title: '角色管理', icon: 'edit' }
    },
    {
      path: 'menus',
      name: 'menus',
      component: () => import('@/views/system/menus'),
      meta: { title: '菜单管理', icon: 'edit' }
    },
    {
      path: 'logs',
      name: 'logs',
      component: () => import('@/views/system/logs'),
      meta: { title: '日志管理', icon: 'edit' }
    }
  ]
}
