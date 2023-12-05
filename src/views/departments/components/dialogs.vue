<template>
  <div>
    <el-dialog :title="titleCompute" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="部门名称" prop="name">
          <el-input v-model="ruleForm.name" placeholder="1-50个字符"></el-input>
        </el-form-item>
        <el-form-item label="部门编码" prop="code">
          <el-input v-model="ruleForm.code" placeholder="1-50个字符"></el-input>
        </el-form-item>
        <el-form-item label="部门负责人" prop="manager">
          <el-select style="width: 100%" v-model="ruleForm.manager" placeholder="请选择">
            <el-option
              v-for="item in simpleList"
              :key="item.id"
              :label="item.username"
              :value="item.username"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" prop="introduce">
          <el-input type="textarea" v-model="ruleForm.introduce" placeholder="1-300个字符"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="allFunction">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import * as API from "@/utils/index"
export default {
  props: {
    departmentsId: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      simpleList: [],
      dialogVisible: true,
      ruleForm: {
        code: "",
        introduce: "",
        manager: "",
        name: "",
        pid: ""
      },
      rules: {
        name: [{ required: true, trigger: "blur", message: "部门名称不能为空" }],
        code: [{ required: true, trigger: "blur", message: "部门编码不能为空" }],
        manager: [{ required: true, trigger: "blur", message: "部门负责人不能为空" }],
        introduce: [{ required: true, trigger: "blur", message: "部门介绍不能为空" }]
      }
    }
  },
  methods: {
    close() {
      this.$emit("close")
    },
    async allFunction() {
      if (this.ruleForm.id) {
				console.log(this.ruleForm,'this.ruleForm');
        let res = await API.departmentsEditApi(this.ruleForm)
        // console.log(res, "编辑")
				this.$message.success(res.message)
      } else {
        this.ruleForm.pid = this.departmentsId
        let result = await API.departmentsAddApi(this.ruleForm)
        // console.log(result, "result")
				this.$message.success(result.message)
      }
      this.$emit("allFunction")
    },
    async getsimple() {
      let result = await API.departmentSimpleApi()
      // console.log(result, "simple")
      this.simpleList = result.data
    },
    // 回显
    async departmentse() {
      const result = await API.departmentseApi({ id: this.departmentsId })
      // console.log(result,'回显数据');
      this.ruleForm = result.data
      // console.log(this.ruleForm,'ruleForm');
    }
  },
  created() {
    this.getsimple()
  },
  computed: {
    titleCompute() {
      return this.ruleForm.id ? "编辑部门" : "添加部门"
    }
  },
  filters: {},
  watch: {},
  components: {}
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog__header {
  padding: 20px 20px 10px;
  background-color: #66b1ff;
  color: white;
}
::v-deep .el-dialog__title {
  line-height: 24px;
  font-size: 18px;
  color: white;
}
::v-deep .el-dialog__headerbtn .el-dialog__close {
  color: white;
}
</style>
