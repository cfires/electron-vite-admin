import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import i18n from './i18n'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css';

const app = createApp(App)

app.use(i18n)
app.use(ElementPlus, {
  locale: i18n.global.messages[i18n.global.locale]
})

app.mount('#app')
