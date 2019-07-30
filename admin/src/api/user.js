import request from '@/utils/request'

export async function login (data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export async function getUser (data) {
  return request({
    url: '/user',
    method: 'get',
    data
  })
}
