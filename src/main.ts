import { createApp, App } from 'vue'
import { globalRegister } from './global'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'
const app: App = createApp(rootApp)

app.use(router)
app.use(store)
app.use(globalRegister)

app.mount('#app')
hyRequest.request({
  url: '/home/multidata',
  method: 'GET'
})
