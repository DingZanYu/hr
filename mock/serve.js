
const express = require("express")
const Mock = require("mockjs")
const loginRes = require("./common/login.json")
const port = 3001
const app = express()

app.post("/sys/login",(require,response)=>{
	console.log(require);
	console.log(response);
	response.json(Mock.mock(loginRes))
})

app.listen(port,()=>{
	console.log(`我启动了${port}`);
})