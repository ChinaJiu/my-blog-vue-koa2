import request from '@/utils/request'

export async function getTableData (data) {
  console.log('data', data)
  return request({
    url: '/type',
    method: 'get',
    params: {
      a: 2
    }
  })
}
