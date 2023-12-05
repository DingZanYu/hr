import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store"
import http from "@/utils/httpRequest"
import {
  Button,
  Select,
  MessageBox,
  Message,
  Form,
  FormItem,
  Input,
  Container,
  Menu,
  Aside,
  Main,
  Popover,
  Dropdown,
  DropdownMenu,
  DropdownItem,
	Calendar,
	Row,
	Option,
	Submenu,
	MenuItemGroup,
	MenuItem,
	Tree,
	Dialog
} from "element-ui"

Vue.use(Input)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Container)
Vue.use(Menu)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Popover)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Calendar)
Vue.use(Row)
Vue.use(Option)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(MenuItem)
Vue.use(Tree)
Vue.use(Dialog)
Vue.component(Button.name, Button)
Vue.component(Select.name, Select)
// Vue.use(MessageBox);
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$message = Message

Vue.prototype.$http = http

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app")
