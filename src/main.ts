import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './styles/style.less'

import { setupAntd } from './core/antdImport'

const app = createApp(App)
  .use(store)
  .use(router)

//注册使用的ant-design-vue组件
setupAntd(app)

app.mount('#app')
