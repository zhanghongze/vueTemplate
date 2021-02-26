import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//配置路由
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: resolve=>(require(["@/pages/home"],resolve)),
			meta: {
				title: '首页',
			}
		},
		{
			path: '/category',
			name: 'category',
			component: resolve=>(require(["@/pages/category"],resolve)),
			meta: {
				title: '分类',
			}
		},
		{
			path: '/cart',
			name: 'cart',
			component: resolve=>(require(["@/pages/cart"],resolve)),
			meta: {
				title: '购物车',
			}
		},
		{
			path: '/profile',
			name: 'profile',
			component: resolve=>(require(["@/pages/profile"],resolve)),
			meta: {
				title: '我的',
			}
		},
		{
			path: '*',
			redirect:'/home'
		}
	]
})
