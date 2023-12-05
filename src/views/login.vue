<template>
  <div class="con">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" class="demo-ruleForm">
      <p>IHRM后台登录系统</p>
      <el-form-item prop="mobile">
        <el-input v-model="ruleForm.mobile" prefix-icon="el-icon-user-solid"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm.password" show-password prefix-icon="el-icon-unlock"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
      <div class="text">
        仅用于IT培训教学使用,为保障您的个人信息安全,请勿向平台录入任何个人 敏感信息(如手机号、身份证等)!
      </div>
    </el-form>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios"
import { loginApi } from "@/utils/index"
import { setToken } from "@/utils/auth"
import { validateMobile } from "@/utils/validate"
export default {
  name: "HomeView",
  data() {
    const validateMobiles = (rule, value, callback) => {
      validateMobile(value) ? callback() : callback(new Error("手机号格式不正确"))
    }
    return {
      ruleForm: {
        mobile: "13800000002",
        password: "hm#qd@23!"
      },
      rules: {
        mobile: [
          { required: true, trigger: "blur", message: "手机号不能为空" },
          { validator: validateMobiles, trigger: "blur" }
        ],
        password: [{ required: true, trigger: "blur", message: "密码不能为空" }]
      }
    }
  },
  created() {
    // console.log(process.env)
  },
  methods: {
    async submitForm() {
      // axios
      //   .post(this.$http.addURL("/sys/login"), {
      //     mobile: this.ruleForm.mobile,
      //     password: this.ruleForm.password
      //   })
      //   .then((res) => {
      //     console.log(res)
      //
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
			let res = await loginApi(this.ruleForm)
        console.log(res, "登录")
        if (res.success) {
          setToken(res.data)
          this.$router.push("/")
        } else {
          this.$message.error(res.message)
        }
    }
  }
}
</script>
<style lang="scss" scoped>
.con {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/资源/图片/common/login.jpg);
  padding-top: 240px;
  .demo-ruleForm {
    margin: 0 auto;
    width: 400px;
    // text-align: center;
    // .el-input{
    // 	background-color: #d1e3ff;
    // 	color: #69a9fe;
    // }
    p {
      margin-bottom: 20px;
      font-size: 45px;
      color: white;
    }
    .el-button {
      width: 100%;
    }
    .text {
      color: white;
      float: left;
      font-size: 14px;
    }
  }
}
</style>
