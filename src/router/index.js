import Vue from 'vue'
import Router from 'vue-router'
/**
 * 重写路由的push方法 防止重复点击路由报错
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
Vue.use(Router)
//配置路由
export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/home',
			name: 'home',
			component: resolve=>(require(["@/views/home"],resolve)),
			meta: {
				title: '首页',
			}
		},
		{
			path: '/category',
			name: 'category',
			component: resolve=>(require(["@/views/category"],resolve)),
			meta: {
				title: '分类',
			}
		},
		{
			path: '/cart',
			name: 'cart',
			component: resolve=>(require(["@/views/cart"],resolve)),
			meta: {
				title: '购物车',
			}
		},
		{
			path: '/profile',
			name: 'profile',
			component: resolve=>(require(["@/views/profile"],resolve)),
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
