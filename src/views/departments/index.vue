<template>
  <div class="treee">
    <el-tree :data="partmentsList" :props="defaultProps" default-expand-all :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ data.name }}</span>
        <span>
          <span style="margin-right: 50px">{{ data.manager }}</span>
          <el-dropdown @command="addAndEdit($event, data.id)">
            <span class="el-dropdown-link"> 操作<i class="el-icon-arrow-down el-icon--right"></i> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="addDialog">添加子部门</el-dropdown-item>
              <el-dropdown-item command="editDialog" v-if="data.name !== '传智教育'">编辑子部门</el-dropdown-item>
              <el-dropdown-item command="delDialog" v-if="data.name !== '传智教育'">删除部门</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </span>
      </span>
    </el-tree>
    <!-- 封装弹框组件 -->
    <dialogs
      v-if="dialogVisibles"
      ref="dialogRef"
      @close="close"
      @allFunction="allFunction"
      :departmentsId="departmentsId"
    />
  </div>
</template>

<script>
import * as API from "@/utils/index"
import dialogs from "./components/dialogs"
import { changeData } from "@/utils/publicLogic"
export default {
  data() {
    return {
      partmentsList: [],
      dialogVisibles: false,
      defaultProps: {
        label: "name",
        children: "children"
      },
      departmentsId: ""
    }
  },
  created() {
    this.getDepartments()
  },
  methods: {
    async getDepartments() {
      let res = await API.departmentsApi()
      console.log(res, "res")
      if (res.code === 10000) {
        this.$message({
          message: "获取组织架构数据成功!",
          type: "success"
        })
        this.partmentsList = res.data.depts
        const arrays = []
        this.partmentsList.forEach((i) => {
          if (i.pid == "-1") {
            arrays.push({ ...i, manager: "负责人" })
          }
        })
        arrays[0].children = changeData(res.data.depts, 0)
        this.partmentsList = arrays
      }
      // console.log(this.partmentsList,'最终数据');
    },
    // 功能判断
    async addAndEdit(event, id) {
      // console.log(event,'event');
      if (event == "addDialog") {
        this.departmentsId = id
        this.dialogVisibles = true
      } else if (event == "editDialog") {
        this.departmentsId = id
        this.dialogVisibles = true
        // 回显数据 props为异步 使用$nextTick
        this.$nextTick(() => {
          this.$refs.dialogRef.departmentse()
        })
      } else {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(async () => {
            let result = await API.departamentsDelApi({ id: id })
            console.log(result)
            this.getDepartments()
            this.$message({
              type: "success",
              message: "删除成功!"
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      }
    },
    close() {
      this.dialogVisibles = false
    },
    // 关闭弹框
    allFunction() {
      this.dialogVisibles = false
      this.getDepartments()
    }
  },
  computed: {},
  filters: {},
  watch: {},
  components: {
    dialogs
  }
}
</script>

<style lang="scss" scoped>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
.el-tree {
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 0 3px #ccc;
  padding: 30px 60px;
}
.treee {
  width: 100%;
  height: 100vh;
  padding: 15px;
}
</style>
