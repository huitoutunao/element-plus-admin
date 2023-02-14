import { createApp } from 'vue'

import 'normalize.css/normalize.css'
import '@/assets/styles/index.scss'

import App from '@/App.vue'
import router from '@/router'
import { setupStore } from '@/store'

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app')
