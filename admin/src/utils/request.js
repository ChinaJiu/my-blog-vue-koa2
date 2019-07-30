import axios from 'axios'
import { Message, MessageBox, Loading } from 'element-ui'

let loadingInstance // 加载实例
let isLoading = true // 是否需要出现加载动画

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
})

// 请求拦截
service.interceptors.request.use(config => {
    let data = config.data
    if (data && !data.isLoading) isLoading = false
    openLoading()
    return config
  },
  error => {
    console.log(error)
    closeLoading()
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(response => {
    const res = response.data
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
          confirmButtonText: 'Re-Login',
          cancelButtonText: 'Cancel',
          type: 'warning'
        }).then(() => {
          // store.dispatch('user/resetToken').then(() => {
          //   location.reload()
          // })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      closeLoading()
      console.log(res)
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    closeLoading()
    return Promise.reject(error)
  }
)

function openLoading () {
  if (isLoading) loadingInstance = Loading.service()
}

function closeLoading () {
  if (isLoading) loadingInstance.close()
}

export default service
