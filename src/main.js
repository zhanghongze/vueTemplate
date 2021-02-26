import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vant from 'vant'
import 'vant/lib/index.css'
import '@vant/touch-emulator'
import 'babel-polyfill';
import 'lib-flexible';
import VueWechatTitle from 'vue-wechat-title';
import store from './store/store'
Vue.use(VueWechatTitle)
// import Vconsole from 'vconsole'
// let vConsole = new Vconsole();
// Vue.use(vConsole);
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
  router,
	store,
  render: h => h(App),
}).$mount('#app')
