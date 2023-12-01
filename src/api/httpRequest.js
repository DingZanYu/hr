import axios from 'axios'
import { MessageBox,Loading } from 'element-ui'

let loadingInstance = Loading.service({fullscreen:true})
console.log(loadingInstance,"loadingInstance.close()")

const http = axios.create({

})

http.interceptors.request.use((config)=>{

	loadingInstance = Loading.service({fullscreen:true})

	return config
},(error)=>{
	return Promise.reject(error)
})

// 响应拦截
http.interceptors.response.use((response)=>{
	loadingInstance.close()
	if(response.data && response.data.status === 2){
		
	}
})