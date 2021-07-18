import Vue from 'vue'
import Vuex from 'vuex'

// import createPersistedState from "vuex-persistedstate"
Vue.use(Vuex)

const store = new Vuex.Store({
	plugins: [
		// createPersistedState({
		// 	storage: {
		// 		getItem: key => uni.getStorageSync(key),
		// 		setItem: (key, value) => uni.setStorageSync(key, value),
		// 		removeItem: key => uni.removeStorageSync(key)
		// 	}
		// })
	],
	modules: {},
	state: {
		fixImgList: [],
		textareaValue:""
	},
	mutations: {
		changeSingleVal:(state,payload)=>{
			state[payload[0]]=payload[1]
		}
	},
	actions: {}
})

export default store
