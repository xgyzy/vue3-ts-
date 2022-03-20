import { createApp, App } from 'vue'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/css/index.less'
import rootApp from './App.vue'
import router from './router'
import store from './store'
import { setupStore } from './store'
// import hyRequest from './service'
const app: App = createApp(rootApp)

app.use(router)
app.use(store)
app.use(globalRegister)
app.use(setupStore)
app.mount('#app')
// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestInterceptor: (config) => {
//       console.log('单独请求')
//       return config
//     },
//     responseInterceptor: (res) => {
//       console.log('单独相应')
//       return res
//     }
//   }
// })

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   showLoading: false
// })
