import { createApp } from 'vue'
import App from './App.vue'
import { router } from './routing'
import './style.css'

createApp(App).use(router).mount('#app')
