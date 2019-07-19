import Util from '../lib/utils'
// import qs from 'qs'
// import Vue from 'vue'
// import store from '../store/index'

Util.ajax.defaults.headers.common = {
  'X-Requested-With': 'XMLHttpRequest'
}

Util.ajax.interceptors.request.use(config => {
  /**
   * 在这里做loading ...
   * @type {string}
   */

  return config;
}, error => {
  return Promise.reject(error)
})

Util.ajax.interceptors.response.use(res => {

  return res;
}, error => {

  return Promise.reject(error)
})

export default {
  // post (url, params = {}) {
  //   // const {username} = params;
  //   const {isLoading = true} = params;

  //   return Util.ajax({
  //     method: 'post',
  //     url,
  //     data: qs.stringify(params),
  //     auth: {

  //     }
  //   })
  // }

  get(url, params = {}) {
    // const {username} = params;
    // const {isLoading = true} = params;

    return Util.ajax({
      method: 'get',
      url,
      params
    })
  }
}