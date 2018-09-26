// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import iView from 'iview'

import App from './App'
import router from './router'
import i18n from './i18n'

import 'normalize.css'

import 'iview/dist/styles/iview.css'

Vue.config.productionTip = false

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
