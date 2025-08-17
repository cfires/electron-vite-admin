import { I18n } from 'vue-i18n'

declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $i18n: I18n
    $t: (key: string, values?: Record<string, any>) => string
  }
}
