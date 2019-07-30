import request from '@/utils/request'

export async function getArticle (data) {
  return request({
    url: '/article',
    method: 'get',
    data
  })
}
