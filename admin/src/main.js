import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import htmlToPdf from './utils/htmlToPdf'

Vue.use(ElementUI)

// 使用Vue.use()方法就会调用工具方法中的install方法
Vue.use(htmlToPdf)

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
