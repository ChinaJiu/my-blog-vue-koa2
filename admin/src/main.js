import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from './utils/htmlToPdf'
Vue.use(ElementUI)
// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

Vue.config.productionTip = false

const whiteList = ['/login'] // no redirect whitelist

router.beforeEach((to, from, next) => {
  console.log('token', store.getters.token)
  const hasToken = store.getters.token

  if (hasToken) {
    
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      console.log(1)
      next()
    } else {
      console.log(2)
      // other pages that do not have permission to access are redirected to the login page.
      console.log(to.path)
      next(`/login`)
    }
  }
})
router.afterEach(() => {
  console.log('afterEach')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
