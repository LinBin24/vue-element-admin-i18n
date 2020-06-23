import request from '@/utils/request'

export function login(data) {
  return request({
    // url: '/vue-element-admin/user/login',
    url: '/user/login',
    method: 'post',
    data
  })
}

export function merchant_list(data) {
  return request({
    url: '/merchant/list',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    // url: '/vue-element-admin/user/logout',
    url: '/admin/login-out',
    method: 'post'
  })
}
