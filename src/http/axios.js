// ajax 封装插件, 使用 axios
import axios from 'axios'
import Config from './config/config'


// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || ''
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const config = {
    baseURL: Config.baseUrl || process.env.apiUrl || '',
    // timeout: 5 * 1000, // 请求超时时间设置
    crossDomain: true,
    // withCredentials: true, // Check cross-site Access-Control
    // 定义可获得的http响应状态码
    // return true、设置为null或者undefined，promise将resolved,否则将rejected
    validateStatus(status) {
        return status >= 200 && status < 500
    },
}

// const retryTime = 2 // 请求失败重试次数
// const retryDelay = 1500 // 请求失败重试间隔

// 创建请求实例
const _axios = axios.create(config)

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
    return _axios({
        method: 'post',
        url,
        data,
        params,
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
    return _axios({
        method: 'get',
        url,
        params,
    })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
    return _axios({
        method: 'put',
        url,
        params,
        data,
    })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
    return _axios({
        method: 'delete',
        url,
        params,
    })
}

export default _axios

