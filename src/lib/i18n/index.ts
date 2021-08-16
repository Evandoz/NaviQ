import { createI18n } from 'vue-i18n'

import zhCnCustom from './lang/zh-CN'
// import zhTwcustom from './lang/zh-TW'
import enUsCustom from './lang/en-US'

// 自动根据浏览器系统语言设置语言
const navLang = navigator.language
const localLang = navLang === 'zh-CN' || navLang === 'en-US' ? navLang : false
const lang = window.localStorage.lang || localLang || 'zh-CN'

const messages = {
  'zh-CN': {
    // 中文语言包
    ...zhCnCustom,
  },
  'en-US': {
    // 英文语言包
    ...enUsCustom,
  },
}

const i18n = createI18n({
  locale: lang, // 语言标识，通过切换locale（this.$i18n.locale）的值来实现语言切换
  messages,
  silentTranslationWarn: true,
})

export default i18n
