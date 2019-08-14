import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { Message } from 'element-ui'

NProgress.configure({ showSpinner: false }) // NProgress Configuration
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  // loading
  NProgress.start()

  const hasToken = store.getters.token

  // console.log(hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      next()
      const roles = store.getters.roles
      const hasRoles = roles.roles && roles.roles.length > 0
      // console.log(hasRoles)
      if (hasRoles) {
        next()
      } else {
        try {
          console.log(router)
          const { roles } = await store.dispatch('user/getRoles')
          const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
          router.addRoutes(accessRoutes)
          console.log('我在异步加载动态路由')
          next({ ...to, replace: true })
        } catch (error) {
          Message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  NProgress.done()
})
