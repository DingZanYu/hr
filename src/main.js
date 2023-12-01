import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import { Button, Select,MessageBox,Message } from 'element-ui';

Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
// Vue.use(MessageBox);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$message = Message;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
