import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'

import {
  Icon
} from 'element-ui';

Vue.use(Icon);
Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
