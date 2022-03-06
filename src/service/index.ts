import HyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
export default new HyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('请求成功拦截')
      return config
    },
    requestInterceptorCatch: (err) => {
      console.log('请求失败拦截')
      return err
    },
    responseInterceptor: (res) => {
      console.log('相应成功拦截')
      return res
    },
    responseInterceptorCatch: (err) => {
      console.log('相应失败拦截')
      return err
    }
  }
})
