import request from '../utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function logup(data) {
  return request({
    url: '/logup',
    method: 'post',
    data
  })
}


export function getToken() {
  return request({
    url: '/get_token',
    method: 'get',
  })
}
