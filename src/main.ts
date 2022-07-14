import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css';
import { createI18n } from 'vue-i18n'
import messages from './locales/messages.json'

const i18n = createI18n({
  locale: window.localStorage.getItem('lang') || 'en',
  fallbackLocale: 'pt-br',
  messages
})

const app = createApp(App)
app.use(router)
app.use(i18n)
app.mount('#app')


