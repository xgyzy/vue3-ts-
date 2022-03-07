import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HyRequestIntercepotors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig extends AxiosRequestConfig {
  interceptors?: HyRequestIntercepotors
  showLoading?: boolean
}
