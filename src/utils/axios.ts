import axios from 'axios'
import Qs from 'qs'

let ConfigBaseURL = ''
if (process.env.NODE_ENV == 'development') {
  //开发环境
  ConfigBaseURL = '/api'
} else if (process.env.NODE_ENV == 'production') {
  //生产环境
  // ConfigBaseURL = 'http://xxx.com:2086/'
}

const Service = axios.create({
  // 设置超时时间
  timeout: 30000,
  baseURL: ConfigBaseURL
})

const ACCESS_TOKEN = 'no'

// 添加请求拦截器
Service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么
    const token = ACCESS_TOKEN
    if (token) {
      config.headers.Authorization = token // 请求头部添加token
    }
    return config
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
Service.interceptors.response.use(
  (response) => {
    // 对响应数据做点什么
    const code = response.status
    if ((code >= 200 && code < 300) || code === 304) {
      return Promise.resolve(response.data)
    } else {
      return Promise.reject(response)
    }
  },
  (error) => {
    // 对响应错误做点什么
    if (error.response) {
      switch (error.response.status) {
        case 401:
          console.error('返回401 清除token信息并跳转到登陆页面')
          break
        case 404:
          console.error('网络请求不存在')
          break
        case 503:
          console.error('服务器不可用')
          break
        default:
          console.error(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        console.error('请求超时！请检查网络是否正常')
      } else {
        console.error('请求失败，请检查网络是否已连接')
      }
    }
    return Promise.reject(error)
  }
)

// get，post请求方法
export function post(url: string, data?: object): Promise<any> {
  return Service({
    method: 'post',
    url,
    data: Qs.stringify(data),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
export function postupload(url: string, data: object): Promise<any> {
  return Service({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
}
export function jsonpost(url: string, data: object): Promise<any> {
  return Service({
    method: 'post',
    url,
    data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  })
}
export function get(url: string): Promise<any> {
  return Service({
    method: 'get',
    url
  })
}
