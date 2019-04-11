import Vue from 'vue'
import iView from 'iview'

import App from './App.vue'
import router from './router/index'
import store from './store'

import i18n from './i18n'

import 'normalize.css'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
