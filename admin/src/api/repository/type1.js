import request from '@/utils/request'

export async function getTableData (data) {
  return request({
    url: '/study',
    method: 'get',
    data
  })
}
