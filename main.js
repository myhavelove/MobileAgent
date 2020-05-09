import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

const xjzj={
    toast: function(text, duration, success) {
		uni.showToast({
			title: text,
			icon: success ? 'success' : 'none',
			duration: duration || 2000
		})
    },
    imgUrl: function () {
		//接口地址
		// return "http://192.168.0.120";
		// 外网地址
		return "http://doc.xiujizhijia.com";
    },
    interfaceUrl: function () {
		//接口地址
		// return "http://192.168.0.120:8088";
		// return "http://192.168.0.152:81";
		// 外网ip
		return "https://api.xiujizhijia.com";

    },
    setToken: function(token) {
		uni.setStorageSync("token", token)
	},
	getToken() {
		return uni.getStorageSync("token")
	},
	isLogin: function() {
		return uni.getStorageSync("token") ? true : false
    },
    request: function(url, postData, method, type, hideLoading) {
        
		//接口请求
		if (!hideLoading) {
			uni.showLoading({
				mask: true,
				title: '请稍候...'
			})
        }
		return new Promise((resolve, reject) => {
			uni.request({
				url: this.interfaceUrl() + url,
				data: postData,
				header: {
					'content-type': type ? 'application/x-www-form-urlencoded' : 'application/json',
					'authorization': this.getToken(),
					'security': 1
				},
				method: method, //'GET','POST'
				dataType: 'json',
				success: (res) => {
					!hideLoading && uni.hideLoading()
					resolve(res.data)
				},
				fail: (res) => {
					if (!hideLoading) {
						this.toast("网络不给力，请稍后再试~")
					}
					reject(res)
				}
			})
		})
	},
    
}




App.mpType = 'app'

const app = new Vue({
    ...App
})
Vue.prototype.xjzj=xjzj;
Vue.prototype.$eventHub = Vue.prototype.$eventHub || new Vue()
app.$mount()
