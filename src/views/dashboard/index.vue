<template>
  <div>
    <div class="title">
			<img class="images" src="../../assets/资源/图片/common/head.jpg" alt="">
			<div class="text">
				<div class="one">
					早安,管理员,祝你开心每一天!
				</div>
				<div class="two">
					管理员|传智播客-总裁办
				</div>
			</div>
		</div>
    <div class="foot">
      <div class="l">
        <div class="l_date">
          <p>工作日历</p>
					<WorkCalendar />
        </div>
        <div class="l_desc">
          <h5>公告</h5>
          <div class="pad">
            <div class="text">
              <div class="o">
                <img src="../../assets/资源/图片/common/img.jpeg" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </div>
            <div class="text">
              <div class="o">
                <img src="../../assets/资源/图片/common/img.jpeg" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </div>
            <div class="text">
              <div class="o">
                <img src="../../assets/资源/图片/common/img.jpeg" alt="" />
                <span>朱继柳</span>
                发布了第1期"传智大讲堂"互动讨论获奖名单公布
              </div>
              <div class="t">2018-07-21 15:21:38</div>
            </div>
          </div>
        </div>
      </div>
      <div class="r">
        <div class="r_one">
          <div class="title_two">流程申请</div>
          <div class="nav">
            <div>加班离职</div>
            <div>请假调休</div>
            <div>审批列表</div>
            <div>我的信息</div>
          </div>
        </div>
        <div class="r_two">
          <p>绩效指数</p>
					<right-echarts style="margin-top:20px;width:100%;height:100%;"></right-echarts>
        </div>
        <div class="r_three">
          <div class="title_two">帮助链接</div>
          <img src="../../assets/资源/图片/common/icon.png" alt="" />
          <div class="uname">
            <div class="name">入门指南</div>
            <div class="name">在线帮助手册</div>
            <div class="name">联系技术支持</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import rightEcharts from "./components/rightEcharts.vue"
import WorkCalendar from "./components/WorkCalendar.vue"
export default {
  data() {
    return {}
  },
  mounted() {},
  methods: {
  },
  computed: {},
  filters: {},
  watch: {},
  components: {
		rightEcharts,
		WorkCalendar
	}
}
</script>

<style lang="scss" scoped>
.title {
  padding: 15px;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 3px #ccc;
  height: 120px;
	display:flex;
	.images{
		margin-left:30px;
		width:80px;
		height: 80px;
		border-radius: 100px;
	}
	.text{
		margin-top:15px;
		margin-left:15px;
		.two{
			margin-top:10px;
			font-size:14px;
			color:#6b766c;
		}
	}
}
.foot {
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  .l {
    width: 52%;
    height: 500px;
    .l_date {
      width: 100%;
      height: 520px;
      border-radius: 5px;
      box-shadow: 0 0 3px #ccc;
      background-color: #fff;
      padding: 15px;
      p {
        padding-left: 15px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        font-size: 19px;
        // box-sizing: border-box;
      }
    }
    .l_desc {
      margin-top: 15px;
      height: 450px;
      border-radius: 5px;
      box-shadow: 0 0 3px #ccc;
      background-color: #fff;
      padding: 15px;
      h5 {
        padding-left: 15px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
      }
      .pad {
        padding: 0 30px;
        .text {
          padding: 30px;
          border-bottom: 1px solid #ccc;
          position: relative;
          padding-left: 60px;
          .o {
            span {
              color: #4979fc;
            }
            img {
              position: absolute;
              left: 0px;
              top: 20px;
              width: 50px;
            }
          }
          .t {
            margin-top: 25px;
          }
        }
      }
    }
  }
  .r {
    width: 47.2%;
    .title_two {
      width: 80px;
      font-size: 19px;
      padding-bottom: 5px;
      border-bottom: 3px solid #8a97f8;
    }
    .r_one {
      height: 160px;
      border-radius: 5px;
      box-shadow: 0 0 3px #ccc;
      background-color: #fff;
      padding: 30px;
      .nav {
        margin-top: 24px;
        width: 100%;
        display: flex;
        div {
          margin-right: 10px;
          border: 1px solid #ccc;
          padding: 10px 20px;
          border-radius: 3px;
        }
        div:hover {
          margin-right: 10px;
          padding: 10px 20px;
          border-radius: 3px;
          border: 1px solid #c6e2ff;
          background-color: #ecf5ff;
          color: #0095ff;
        }
      }
    }
    .r_two {
      margin-top: 15px;
      height: 450px;
      border-radius: 5px;
      box-shadow: 0 0 3px #ccc;
      background-color: #fff;
      padding: 20px;
      p {
        padding-left: 15px;
        border-bottom: 1px solid #ccc;
        padding-bottom: 10px;
        font-size: 19px;
        // box-sizing: border-box;
      }
    }
    .r_three {
      margin-top: 15px;
      height: 240px;
      border-radius: 5px;
      box-shadow: 0 0 3px #ccc;
      background-color: #fff;
      padding: 30px;
      img {
        margin-top: 15px;
        margin-left: 80px;
      }
      .uname {
        width: 89%;
        margin-top: 15px;
        margin-left: 80px;
        display: flex;
        justify-content: space-between;
        .name {
          margin-right: 100px;
        }
      }
    }
  }
}
</style>
