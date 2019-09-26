import axios from 'axios'

const service = axios.create({
  timeout: 1000 * 30
})
const CancelToken = axios.CancelToken
const source = CancelToken.source()

// 请求缓存列表
let reqList = []

/**
 * 阻止重复请求
 *
 * @param {array}     reqList       请求缓存列表
 * @param {string}    url           当前请求url
 * @param {function}  cancel        请求中断函数
 * @param {string}    errorMessage  请求中断时需要显示的错误信息
 */
const stopRepeatRequest = function (reqList, url, cancel, errorMessage) {
  const errorMsg = errorMessage || ''
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      cancel(errorMsg)
      return
    }
  }
  reqList.push(url)
}

/**
 * 允许某个请求可以继续进行
 *
 * @param {array}   reqList 全部请求列表
 * @param {string}  url     请求地址
 */
const allowRequest = function (reqList, url) {
  for (let i = 0; i < reqList.length; i++) {
    if (reqList[i] === url) {
      reqList.splice(i, 1)
      break
    }
  }
}

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    // 设置cancelToken对象
    config.cancelToken = source.token
    // 阻止重复请求。当上个请求未完成时，相同的请求不会进行
    stopRepeatRequest(reqList, config.url, source.cancel, `${config.url} 请求被中断`)

    return config
  },
  error => {
    return Promise.reject(error)
  })

/**
 * 响应拦截
 */
service.interceptors.response.use(
  response => {
    // 增加延迟，相同请求不得在短时间内重复发送

    const data = response.data
    if (!data.success) {
      if (data.message) {
      }
    }
    return response
  },
  error => {
    if (axios.isCancel(thrown)) {
      console.log(thrown.message);
    } else {
      // 增加延迟，相同请求不得在短时间内重复发送
      setTimeout(() => {
        allowRequest(reqList, error.config.url)
      }, 1000)
    }

    const status = error.response.status
    const message = error.response.data.message

    console.log('%c!<--- 请求失败,错误状态码:' + status + '--->', 'color:red')

    if (message) {
      switch (status) {
        case 400:
          break
        case 401:
          setTimeout(() => {
          }, 500)
          break
      }
    }
    return Promise.reject(error)
  })

/**
 *  封装请求
 * @param data {url,method,data}
 * @returns {Promise<AxiosResponse<any> | void>}
 */
export function request(data) {
  return service.request(data)
}
