const { defineConfig } = require("@vue/cli-service")
const path = require("path")
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  transpileDependencies: true,
  /**关闭保存时候 代码格式化校验 */
  lintOnSave: false,
  /**基准地址 */
  publicPath: "/",
  /**打包
   *开发环境: development
   *测试环境:test
   *灰度环境,备机,半线上:stage
   *线上环境,全量:production
   */
  /**修改打包的文件夹和路径 */
  outputDir: "dist",
  /**静态资源文件修改路径 */
  assetsDir: "assets",
  /**开发环境的服务器配置
   * 8080--80端口是后端服务重要的端口号,一些后端服务必须用80端口才能启动,所以前端尽可能不用80端口
   * 修改端口号
   */
  devServer: {
    /**端口号 */
    port: 9999,
    /**开发运行时域名，设置成'0.0.0.0',在同一个局域网下，如果你的项目在运行，同时可以通过你的http://ip:port/...访问你的项目,,
     * 配置0.0.0.0后,外网可以访问你的域名
     */
    host: "0.0.0.0",
    /**关闭安全网络校验 */
    https: false,
    /**true打开浏览器 */
    open: true,
    /***代理proxy */
    proxy: {
      /* 代理标识 */
      /**
			 *
			 * localhost:9999/api/login
			 *api:https://ihrm-java.itheima.net/api
			 原本请求的路径:https://ihrm-java.itheima.net/api/login
			 路径重写https://ihrm-java.itheima.net/login
			 */
      [process.env.VUE_APP_IDENT]: {
        /**配置代理默认开启代理方式 */
        changeOrigin: true,
        /**如果是http接口，需要配置该参数 */
        secure: false,
        /**配置代理路径 */
        target: process.env.VUE_APP_URL,
        /**路径重写，向后端发起服务的时候，不带代理标识 */
        pathRewrite: {
          ["^" + process.env.VUE_APP_IDENT]: ""
        }
      }
    }
  },
	configureWebpack: {
    resolve: {
      /**路径别名 */
      alias: {
        // eslint-disable-next-line no-undef
        "@": resolve("src"),
        $components: resolve("src/components"),
        vue$: "vue/dist/vue.esm.js"
      }
    }
  },
})
/**
 *人挤人的咖啡店
 *
 *还记得多年前跟你
 *
 *
 *
 *
 *
 *
 */
