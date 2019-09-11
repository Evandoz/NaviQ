import Vue from 'vue'
import VueI18n from 'vue-i18n'

import zhCnLocale from 'iview/dist/locale/zh-CN'
// import zhTwLocale from 'iview/dist/locale/zh-TW'
import enUsLocale from 'iview/dist/locale/en-US'

import zhCnCustom from './lang/zh-CN'
// import zhTwcustom from './lang/zh-TW'
import enUsCustom from './lang/en-US'

Vue.use(VueI18n)

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false
let lang = window.localStorage.lang || localLang || 'zh-CN'

Vue.config.lang = lang

Vue.locale = () => {}

const messages = {
  'zh-CN': { // 中文语言包
    ...zhCnLocale,
    ...zhCnCustom
  },
  'en-US': { // 英文语言包
    ...enUsLocale,
    ...enUsCustom
  }
}

const i18n = new VueI18n({
  locale: lang, // 语言标识，通过切换locale（this.$i18n.locale）的值来实现语言切换
  messages,
  silentTranslationWarn: true
})

export default i18n
