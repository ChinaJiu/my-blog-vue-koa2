import request from '@/utils/request'

export async function getUser (data) {
  return request({
    url: '/user',
    method: 'get',
    data
  })
}
