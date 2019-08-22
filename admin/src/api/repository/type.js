import request from '@/utils/request'

export async function getTableData (data) {
  console.log('query', data.params)
  return request({
    url: '/type',
    method: 'get',
    params: data.params,
    other: { a: 2 }
  })
}
