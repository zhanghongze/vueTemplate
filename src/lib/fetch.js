import axios from 'axios'
import {
	Toast
} from "vant";
const service = axios.create({
	baseURL: '/vms',
	timeout: 5000
})
//请求
service.interceptors.request.use(function (config) {
	// config.headers['token'] = sessionStorage.getItem('token');
	return config;
}, function (error) {
	// Do something with request error
	return Promise.reject(error);
})
//响应
service.interceptors.response.use(response => {
	if (response.status === 200) {
		return response.data;
	} else {
		Promise.reject();
	}
}, function (error) {
	// 失败处理
	switch (error.response.status) {
		case 400:
			error.message = '错误请求';
			break;
		case 401:
			error.message = '未授权，请重新登录';
			break;
		case 403:
			error.message = '拒绝访问';
			break;
		case 404:
			error.message = '请求错误,未找到该资源';
			//TODO 去访问404 页面
			break;
		case 405:
			error.message = '请求方法未允许';
			break;
		case 408:
			error.message = '请求超时';
			break;
		case 500:
			error.message = '服务器端出错';
			break;
		case 501:
			error.message = '网络未实现';
			break;
		case 502:
			error.message = '网络错误';
			break;
		case 503:
			error.message = '服务不可用';
			break;
		case 504:
			error.message = '网络超时';
			break;
		case 505:
			error.message = 'http版本不支持该请求';
			break;
		default:
			error.message = '网络连接错误';
	}
	Toast.fail(error.message);
	return Promise.reject(error);
});

export default service;
