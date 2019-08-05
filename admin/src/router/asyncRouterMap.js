import Layout from '@/layout'
// import Permission from '@/views/permission'

/**
 * meta.roles 页面需要的权限
 * roles[]普通用户
 * roles['adminA']管理员A权限
 * roles['adminB']管理员B权限
 */
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    name: '权限测试',
    meta: { title: 'permission', icon: 'share', roles: [] },
    children: [
      { 
        path: 'index1',
        name: '权限测试页',
        meta: { roles: ['adminA'], title: 'index1', icon: 'edit' } // 页面需要的权限
      },
      { 
        path: 'index2',
        name: '权限测试页',
        meta: { roles: ['adminB'], title: 'index2', icon: 'edit' } // 页面需要的权限
      },
      { 
        path: 'index3',
        name: '权限测试页',
        meta: { roles: [], title: 'index3', icon: 'edit' } // 页面需要的权限
      }]
  },
  { 
    path: '*', 
    redirect: '/404',
    hidden: true
  }
]
