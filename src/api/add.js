import request from '@/utils/request'


export function add(data) {
  return request({
    url:'/add',
    method: 'post',
    data

  })
}
