import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'

// 引入公共样式
import './assets/styles/index.scss'
// 引入 tailwind 样式
import './assets/styles/tailwind.css'
// 引入 element-plus 样式
import 'element-plus/dist/index.css'
// 引入 element-plus 暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(ElementPlus)
app.use(router)
app.mount('#app')
