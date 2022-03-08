import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HyRequestIntercepotors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

export interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HyRequestIntercepotors<T>
  showLoading?: boolean
}
