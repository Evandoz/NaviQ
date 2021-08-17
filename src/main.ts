import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import vuetify from './lib/vuetify'
import i18n from './lib/i18n'

import 'normalize.css'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(i18n)

app.mount('#app')
