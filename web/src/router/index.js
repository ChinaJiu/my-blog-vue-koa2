import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


export default new Router ({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    return {x: 0, y: 0}
  },
  routes: [
    {
      path: '/',
      components: {
        content: () => import('../views/article/list.vue') 
      }
    },{
      path: '/about',
      components: {
        content: () => import('../views/about/index.vue') 
      }
    }
  ]
})