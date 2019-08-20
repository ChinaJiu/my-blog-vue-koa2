import Layout from '@/layout'

export default {
  path: '/repository',
  component: Layout,
  name: 'repository',
  meta: { title: '知识库', icon: 'edit' },
  children: [
    {
      path: 'type1',
      name: 'type1',
      component: () => import('@/views/repository/type'),
      meta: { title: '化疗用药知识库', a: 1 }
    },
    {
      path: 'type2',
      name: 'type2',
      component: () => import('@/views/repository/type'),
      meta: { title: '药物说明知识库', a: 2 }
    },
    {
      path: 'type3',
      name: 'type3',
      meta: { title: '药物适应症知识库' }
    },
    {
      path: 'type4',
      name: 'type4',
      meta: { title: '基因解析知识库' }
    },
    {
      path: 'type5',
      name: 'type5',
      meta: { title: '变异解析知识库' }
    },
    {
      path: 'type6',
      name: 'type6',
      meta: { title: '变异分类知识库' }
    },
    {
      path: 'type7',
      name: 'type7',
      meta: { title: '变异对应药物及解析知识库' }
    },
    {
      path: 'type8',
      name: 'type8',
      meta: { title: '移码方案知识库' }
    },
    {
      path: 'type9',
      name: 'type9',
      meta: { title: '临床试验信息知识库' }
    },
    {
      path: 'type10',
      name: 'type10',
      meta: { title: '不同癌种其他获批靶药' }
    },
    {
      path: 'type11',
      name: 'type11',
      meta: { title: '不同癌种获批免疫药物' }
    },
    {
      path: 'type12',
      name: 'type12',
      meta: { title: '不同癌种临床免疫药物' }
    },
    {
      path: 'type13',
      name: 'type13',
      meta: { title: '前列腺癌分类知识库' }
    },
    {
      path: 'type14',
      name: 'type14',
      meta: { title: '前列腺临床意义知识库' }
    },
    {
      path: 'type15',
      name: 'type15',
      meta: { title: '前列腺相关基因解析知识库' }
    },
    {
      path: 'type16',
      name: 'type16',
      meta: { title: '野生型知识库' }
    }
  ]
}
