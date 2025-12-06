import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import router from "./components/Router/router"
import App from './App.vue'

const pinia = createPinia()


createApp(App).use(router).use(pinia).mount('#app')