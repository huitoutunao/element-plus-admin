import { createApp } from 'vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/index.scss'

import App from '@/App.vue'
import router from '@/router'
import { createPinia } from 'pinia'

const app = createApp(App)
app.use(router).use(createPinia()).mount('#app')
