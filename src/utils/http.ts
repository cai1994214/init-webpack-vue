import axios, { AxiosRequestConfig,  AxiosResponse } from 'axios'
const defaultConfig = {
    timeout: 5000,
    baseUrl: ''
}
class Http {
    constructor() {
        this.httpInterceptorsRequest()
        this.httpInterceptorsRresponse()
    }

    private static asiosInstance = axios.create(defaultConfig)

    private httpInterceptorsRequest() {
        // 请求拦截
        Http.asiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
            return config
        }, (error) => {
            return Promise.reject(error)
        })
    }

    private httpInterceptorsRresponse() {
        // 响应拦截
        Http.asiosInstance.interceptors.response.use((response: AxiosResponse) => {
            return response
        }  , (error) => {
            return Promise.reject(error)
        })
    }

    // 封装请求
    // get
    public httpRequsetGet<T>(url: string, params: AxiosRequestConfig):Promise<T> {
        return Http.asiosInstance.get(url, params).then(res => res.data).catch()
    }

    // post
    public httpRequsetPost<T>(url: string, params: AxiosRequestConfig):Promise<T> {
        return Http.asiosInstance.post(url, params).then(res => res.data).catch()
    }
}


export const http = new Http()

