

// 校验手机号
// 格式校验 1开头 11位的数字 第二位是3-9之间的数字 正则表达式/自定义校验函数
export function validateMobile(str){
	return /^1[3-9]\d{9}$/.test(str)
}