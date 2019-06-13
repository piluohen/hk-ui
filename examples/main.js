import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import Packages from '../packages'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Packages)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
