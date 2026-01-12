import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueCookies from 'vue3-cookies'
import 'swiper/css'
//import 'swiper/css/navigation'
import './style.css'
import router from "./components/Router/router"
import App from './App.vue'

const pinia = createPinia()

createApp(App).use(router).use(pinia).use(VueCookies, {
  expireTimes: "30d",
  secure: true,
  sameSite: "Lax"
}).mount('#app')

import { useSettingsStore } from './components/Store/Settings/SettingStore'
const settings = useSettingsStore()
const lang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en'
settings.updateLang(lang)