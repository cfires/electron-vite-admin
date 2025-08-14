import { createI18n } from 'vue-i18n'
import en from './en.json'
import zh from './zh.json'

const i18n = createI18n({
  legacy: false, // 使用 Composition API 模式
  globalInjection: true,
  locale: 'zh', // 默认语言
  messages: {
    en,
    zh
  }
})

// 关键：必须有默认导出
export default i18n
