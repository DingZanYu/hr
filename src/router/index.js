import Vue from "vue"
import VueRouter from "vue-router"
import HomeView from "../views/HomeView.vue"
import { getToken } from "@/utils/auth"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
		children:[
			{
				path:'dashboard',
				name:'dashboard',
				component:() => import("../views/dashboard/index.vue")
			},
			{
				path:'employees',
				name:'employees',
				component:() => import("../views/employees/index.vue")
			},
			{
				path:'setting',
				name:'setting',
				component:() => import("../views/settig/index.vue")
			},
			{
				path:'permission',
				name:'permission',
				component:() => import("../views/permission/index.vue")
			},
			{
				path:'social_securitys',
				name:'social_securitys',
				component:() => import("../views/social_securitys/index.vue")
			},
			{
				path:'approvals',
				name:'approvals',
				component:() => import("../views/approvals/index.vue")
			},
			{
				path:'attendances',
				name:'attendances',
				component:() => import("../views/attendances/index.vue")
			},
			{
				path:'salarys',
				name:'salarys',
				component:() => import("../views/salarys/index.vue")
			},
			{
				path:'departments',
				name:'departments',
				component:() => import("../views/departments/index.vue")
			}
		]
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
	{
		path:'/login',
		name:'login',
		component:() => import("../views/login.vue")
	}
]

const router = new VueRouter({
  routes
})


router.beforeEach((to,from,next)=>{
	let token = getToken()
	if(!token && to.path !== '/login'){
		next('/login')
	}else if(token && to.path === '/login'){
		next('/')
	}else{
		next()
	}
})


export default router
