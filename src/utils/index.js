import http from "./httpRequest"

// 登录
export const loginApi = (data) => http.post(http.addURL("/sys/login"), data)

// 角色资料
export const profileApi = (data) => http.post(http.addURL("/sys/profile", data))

// 组织架构
export const departmentsApi = () => http.get(http.addURL("/company/department"))
// 添加
export const departmentsAddApi = (data) => http.post(http.addURL("/company/department"), data)
// 负责人数据
export const departmentSimpleApi = () => http.get(http.addURL("/sys/user/simple"))
// 回显
export const departmentseApi = (params) => http.get(http.addURL(`/company/department/${params.id}`))
// 编辑
export const departmentsEditApi = (data) => http.put(http.addURL(`/company/department/${data.id}`), data)
// 删除
export const departamentsDelApi = (params) => http.delete(http.addURL(`/company/department/${params.id}`))
