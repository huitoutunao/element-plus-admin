import Axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

type RequestMethods = 'get' | 'post' | 'put' | 'delete' | 'patch' | 'option' | 'head'

const defaultConfig: AxiosRequestConfig = {
  timeout: 60000,
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
  },
}

class RequestHttp {
  static #axiosInstance: AxiosInstance = Axios.create(defaultConfig)

  constructor() {
    this.#httpInterceptorsRequest()
    this.#httpInterceptorsResponse()
  }

  // 请求拦截器
  #httpInterceptorsRequest(): void {
    RequestHttp.#axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const cfg = config
        return cfg
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  // 响应拦截器
  #httpInterceptorsResponse(): void {
    RequestHttp.#axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        return response.data
      },
      (error: AxiosError) => {
        return Promise.reject(error)
      }
    )
  }

  request(
    method: RequestMethods,
    url: string,
    param?: AxiosRequestConfig,
    axiosConfig?: AxiosRequestConfig
  ) {
    return new Promise((resolve, reject) => {
      RequestHttp.#axiosInstance
        .request({
          method,
          url,
          ...param,
          ...axiosConfig,
        })
        .then(res => {
          return resolve(res)
        })
        .catch(err => {
          return reject(err)
        })
    })
  }

  post(url: string, param?: AxiosRequestConfig, config?: AxiosRequestConfig) {
    return this.request('post', url, param, config)
  }

  get(url: string, param?: AxiosRequestConfig, config?: AxiosRequestConfig) {
    return this.request('get', url, param, config)
  }
}

const http = new RequestHttp()

export default http
