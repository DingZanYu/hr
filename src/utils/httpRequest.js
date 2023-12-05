import axios from "axios"
import { MessageBox, Loading } from "element-ui"
import DEFAULTSTATUS from "./default"
import { getToken, removeToken, setToken } from "./auth"
import router from "@/router/index"
/**放loading */
let loadingInstance

const http = axios.create({
  //  根路径
  baseURL: "/",
  // 超时时间
  timeout: 1000 * 30,
  // header,Content-type
  headers: {
    "Content-Type": "application/json; charset=utf-8"
  },
  // 表示跨域请求时是否需要使用凭证
  withCredentials: true
})

/**
 * 请求拦截
 */
http.interceptors.request.use(
  (config) => {
    /**将token封装到headers中 */
    config.headers["Authorization"] = "Bearer " + getToken()
    /**loading加载 */
    loadingInstance = Loading.service({ fullscreen: true })
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/***
 * 响应拦截
 */
http.interceptors.response.use(
  (response) => {
    /**关闭loading加载 */
    loadingInstance.close()
    // console.log(response, "response")
    if (response.data && response.data.code === 10002) {
      // 401, token失效
      removeToken()
      // 跳转到登录页面
      router.push({
        name: "login"
      })
    }
    return response.data
  },
  (error) => {
    let title = ""
    let message = ""
    loadingInstance.close()
    if (error && error.response) {
      console.log(error)
      /**后端返回的报错的信息 */
      message = error.response.data.message
      // 401, token失效
      switch (
        error.response.status // 跨域存在获取到的状态码的情况, status(随后端定义变化而变化,code)
      ) {
        case DEFAULTSTATUS.ERRORPRO:
          title = "错误请求"
          break // 停止循环
        case DEFAULTSTATUS.UNAUTHORIZED:
          title = "资源未授权"
          break
        case DEFAULTSTATUS.ACCESSFORBIDDEN:
          title = "禁止访问"
          break
        case DEFAULTSTATUS.NOTFOUND:
          title = "未找到所请求的资源"
          break
        case DEFAULTSTATUS.NOTALLOW:
          title = "不允许使用该方法"
          break
        case DEFAULTSTATUS.TIMEOUT:
          title = "请求超时"
          break
        case DEFAULTSTATUS.SERVERERROE:
          title = "内部服务器错误"
          break
        case DEFAULTSTATUS.UNREALIZED:
          title = "未实现"
          break
        case DEFAULTSTATUS.GATEWAY:
          title = "网关错误"
          break
        case DEFAULTSTATUS.SERVICEUN:
          title = "服务不可用"
          break
        case DEFAULTSTATUS.GATEWAYTIMEOUT:
          title = "网关超时"
          break
        case DEFAULTSTATUS.UNSUPPORT:
          title = "HTTP版本不受支持"
          break
        default:
          title = error.response.status
      }
      return MessageBox.alert(message, title, {
        type: "warning"
      })
    } else {
      // 跨域获取不到状态码或者其他状态进行的处理
      return MessageBox.alert("请联系系统管理员, 或稍后再试!", "未知错误", {
        type: "error"
      })
    }
  }
)

/**封装动态代理标识
 */
http.addURL = function (url) {
  return process.env.VUE_APP_IDENT + url
}

/***
 * TODO: 封装get和post请求
 */

export default http