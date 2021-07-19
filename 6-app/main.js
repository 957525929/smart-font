import Vue from 'vue'
import App from './App'
// 引入vuex
import store from './store'
Vue.prototype.$store = store

// 路由跳转
import router from '@/common/router/router.js'
Vue.prototype.$routes = router
	
import * as MPRouter from '@/common/router/routeTo.js'
Vue.prototype.$goPage = MPRouter.goPage
Vue.prototype.$parseURL = MPRouter.parseURL
//组件
// import workplace from './pages/workplace/index.vue'
// Vue.component('workplace', workplace)

// import person from './pages/person/index.vue'
// Vue.component('person', person)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom', cuCustom)

// 提示信息
import tool from 'common/util.js'
Vue.prototype.$msg = tool.msg

Vue.config.productionTip = false

App.mpType = 'app'



const app = new Vue({
	...App,
	router
})
app.$mount()
