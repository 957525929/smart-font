import Vue from 'vue'
import App from './App'

import appoient from './pages/appoient/index.vue'
Vue.component('appoient',appoient)

import record from './pages/record/index.vue'
Vue.component('record',record)

import scan from './pages/scan/index.vue'
Vue.component('scan',scan)

// import workplace from './pages/workplace/index.vue'
// Vue.component('workplace',workplace)

import allow from './pages/allow/index.vue'
Vue.component('allow',allow)

import applyList from './pages/applyList/index.vue'
Vue.component('applyList',applyList)

import verify from './pages/verify/index.vue'
Vue.component('verify',verify)

import staffHome from './pages/home/staffHome.vue'
Vue.component('staffHome',staffHome)

import touristHome from './pages/home/touristHome.vue'
Vue.component('touristHome',touristHome)

import trip from './pages/trip/index.vue'
Vue.component('trip',trip)

import person from './pages/person/index.vue'
Vue.component('person',person)

import person1 from './pages/person/index1.vue'
Vue.component('person1',person1)

import basics from './pages/basics/home.vue'
Vue.component('basics',basics)

import components from './pages/component/home.vue'
Vue.component('components',components)

import plugin from './pages/plugin/home.vue'
Vue.component('plugin',plugin)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



