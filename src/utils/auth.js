/**
 * 把token存储到cookies中
 * 为了安全起见,减少接口被攻击
 * 第一步:下载js-cookies依赖
 * 第二步:封装存储token,获取token,移除token
 */

import Cookies from "js-cookie"

const TYPE = "abcdToken"

// 存储token
function setToken(value) {
  Cookies.set(TYPE, value, { expires: 1 })
}

// 获取token
function getToken() {
  return Cookies.get(TYPE)
}

// 移除token
function removeToken() {
  Cookies.remove(TYPE)
}

export { setToken, getToken, removeToken }
