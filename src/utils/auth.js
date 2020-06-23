// import Cookies from 'js-cookie'

const TokenKey = 'admin_auth'
const RouterKey = 'routers'
const UserInfo = 'user_info'
// export const CUSTOM_URL = "http://api.mhdz.ltd"

export function getToken() {
  return sessionStorage.getItem(TokenKey)
  // return Cookies.get(TokenKey)
}

export function setToken(token) {
  return sessionStorage.setItem(TokenKey, token)
  // return Cookies.set(TokenKey, token)
}

export function removeToken() {
  //   return sessionStorage.setItem(TokenKey, null)
  return sessionStorage.clear()
  // return Cookies.remove(TokenKey)
}

export function getRouters() {
  return sessionStorage.getItem(RouterKey)
}

export function setRouters(routers) {
  return sessionStorage.setItem(RouterKey, routers)
}

export function removeRouters() {
  return sessionStorage.clear()
}

export function getUserInfo() {
  return sessionStorage.getItem(UserInfo)
}

export function setUserInfo(user_info) {
  return sessionStorage.setItem(UserInfo, JSON.stringify(user_info))
}

// const TokenKey = 'Admin-Token'

// export function getToken() {
//   return Cookies.get(TokenKey)
// }
//
// export function setToken(token) {
//   return Cookies.set(TokenKey, token)
// }
//
// export function removeToken() {
//   return Cookies.remove(TokenKey)
// }
