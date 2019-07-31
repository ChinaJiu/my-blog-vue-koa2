import Layout from '@/layout'
import Permission from '@/views/permission'

/**
 * meta.roles  页面需要的权限
 * roles[]普通用户
 * roles['adminA']管理员A权限
 * roles['adminB']管理员B权限
 */
export const asyncRouterMap = [
  {
    path: '/permission',
    component: Layout,
    name: '权限测试',
    meta: { roles: [] }, // 页面需要的权限
    children: [
      { 
        path: 'index',
        component: Permission,
        name: '权限测试页',
        meta: { roles: ['adminA'] } // 页面需要的权限
      },
      { 
        path: 'index',
        component: Permission,
        name: '权限测试页',
        meta: { roles: ['adminB'] } // 页面需要的权限
      },
      { 
        path: 'index',
        component: Permission,
        name: '权限测试页',
        meta: { roles: [] } // 页面需要的权限
      }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
