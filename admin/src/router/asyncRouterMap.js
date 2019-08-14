import Layout from '@/layout'
import Report from '@/router/modules/report'
import Repository from '@/router/modules/repository'
import System from '@/router/modules/system'

/**
 * meta.roles 页面需要的权限
 * roles[]普通用户
 * roles['adminA']管理员A权限
 * roles['adminB']管理员B权限
 */
export const asyncRouterMap = [
  {
    path: '/task',
    component: Layout,
    name: '任务管理',
    meta: { title: '任务管理', icon: 'folder-checked' },
    children: [
      { 
        path: 'allot',
        name: '分配任务',
        meta: { roles: ['adminA'], title: '分配任务', icon: 'edit' } // 页面需要的权限
      },
      { 
        path: 'accept',
        name: '接受任务',
        meta: { roles: ['adminB'], title: '接受任务', icon: 'edit' } // 页面需要的权限
      },
      { 
        path: 'adminB',
        name: 'adminB',
        meta: { roles: ['admin'], title: 'adminB', icon: 'edit' } // 页面需要的权限
      }
    ]
  },
  Report,
  Repository,
  System,
  { 
    path: '*', 
    redirect: '/404',
    hidden: true
  }
]
