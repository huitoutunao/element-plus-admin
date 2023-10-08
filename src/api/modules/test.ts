import http from '../index'
import type { AxiosRequestConfig } from 'axios'

// demo1
export const apiDemo1 = (data?: AxiosRequestConfig, config?: AxiosRequestConfig) =>
  http.post('/api/postTest', data, config)

// demo2
export const apiDemo2 = (data?: AxiosRequestConfig, config?: AxiosRequestConfig) =>
  http.post('/api/postTest', data, config)
