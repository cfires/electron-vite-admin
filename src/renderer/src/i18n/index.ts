import { createI18n } from 'vue-i18n'
import en from './en.json'
import zhCN from './zh-CN.json'

// 类型安全定义
type MessageSchema = typeof en

// 尝试从 localStorage 获取保存的语言设置
const savedLocale =
  localStorage.getItem('lang') || (navigator.language.startsWith('zh') ? 'zh-CN' : 'en')

const i18n = createI18n<[MessageSchema], 'en' | 'zh-CN'>({
  legacy: false, // 必须关闭以使用 Composition API
  locale: savedLocale, // 默认语言
  fallbackLocale: 'en', // 回退语言
  globalInjection: true, // 全局注入 $t 方法
  messages: {
    en,
    'zh-CN': zhCN
  },
})

export default i18n

// 导出切换语言的函数
export function setLocale(locale: 'en' | 'zh-CN') {
  i18n.global.locale = locale
  localStorage.setItem('lang', locale)
}

// 导出当前语言
export function getCurrentLocale() {
  return i18n.global.locale
}
