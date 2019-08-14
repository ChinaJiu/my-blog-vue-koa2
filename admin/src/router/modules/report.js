import Layout from '@/layout'

export default {
  path: '/report',
  component: Layout,
  name: 'report',
  meta: { title: '报告管理', icon: 'tickets' },
  children: [
    {
      path: 'create',
      component: () => import('@/views/report/create'),
      name: 'create',
      meta: { title: '生成报告', icon: 'edit' }
    },
    {
      path: 'check',
      component: () => import('@/views/report/check'),
      name: 'check',
      meta: { title: '审核报告', icon: 'edit' }
    }
  ]
}
