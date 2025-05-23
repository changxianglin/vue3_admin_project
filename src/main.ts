// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'

import App from '@/App.vue'
import router from './router'
import pinia from './store'

const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus, {
  locale: zhCn,
})

import 'virtual:svg-icons-register'


// import SvgIcon from '@/components/SvgIcon/index.vue'

// app.component('SvgIcon', SvgIcon)

import globalComponent from '@/components'
app.use(globalComponent)

import '@/styles/index.scss'

app.use(router)
app.use(pinia)

import './permission'

app.mount('#app')

