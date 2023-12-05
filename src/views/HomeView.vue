<template>
  <div>
    <el-container>
      <el-aside width="160px">
        <img src="../assets/资源/图片/common/logo.png" alt="" />
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
					style="background-color: rgba(0, 0, 0, 0);"
          text-color="#fff"
          active-text-color="#409eff"
					router
        >
          <el-menu-item :index="item.path" v-for="item,index in menuList" :key="index">
            <i  class="el-icon-menu"></i>
            <span  slot="title">{{ item.pathName }}</span>
          </el-menu-item>

        </el-menu>
      </el-aside>
      <el-main>
        <div class="top">
          <div class="left">
            <i class="el-icon-s-fold"></i>
            <!-- <i class="el-icon-s-unfold"></i> -->

            <span class="s1">江苏传智播客教育科技股份有限公司</span>
            <span class="s2">体验版</span>
          </div>
          <div class="right">
            <el-dropdown trigger="click" style="color: white">
              <span class="el-dropdown-link">
                <img class="images" src="../assets/资源/图片/common/head.jpg" alt="" />
                {{ username }}<i style="cursor: pointer" class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>首页</el-dropdown-item>
                <el-dropdown-item>项目地址</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="mid"></div>
        <div class="content">
          <router-view></router-view>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import * as API from "@/utils/index"
import axios from "axios"
export default {
  data() {
    return {
      username: "",
      menuList: []
    }
  },
  mounted() {
    // axios.post(this.$http.addURL('/sys/profile')).then((res)=>{
    // 	console.log(res,'res');
    // })
    API.profileApi().then((res) => {
      // console.log(res, "res")
      this.username = res.data.username
    })
    axios.get("menu.json").then((res) => {
      // console.log(res, "menu")
      this.menuList = res.data.data
    })
  },
  methods: {},
  computed: {},
  filters: {},
  watch: {},
  components: {}
}
</script>

<style lang="scss" scoped>
.el-aside {
  background-color: #4979fc;
  height: 100vh;
  background-image: url(../assets/资源/图片/common/logBg.png);
  img {
    margin: 0 auto;
  }
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #fcfcfc;
  height: 100vh;
  overflow-y: scroll;
  .top {
    width: 100%;
    background-color: #5788fd;
    height: 40px;
    line-height: 40px;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    box-sizing: border-box;
    .left {
      .s1 {
        margin-left: 16px;
      }
      .s2 {
        margin-left: 15px;
        background-color: #84a9fe;
        padding: 3px 5px;
        box-sizing: border-box;
        border-radius: 10px;
        font-size: 14px;
      }
    }
  }
  .mid {
    width: 100%;
    height: 30px;
    background-color: #fff;
    box-shadow: 0 0 3px #ccc;
  }
  .content {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
  }
}
.images {
  position: absolute;
  width: 30px;
  border-radius: 100px;
  top: 5px;
  right: 70px;
}
</style>
