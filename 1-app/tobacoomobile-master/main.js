import Vue from 'vue'
import App from './App'

import workplace from './pages/workplace/index.vue'
Vue.component('workplace',workplace)


import lockinstall from './pages/lockinstall/installindex.vue'
Vue.component('lockinstall',lockinstall)
import lockrepair from './pages/lockrepair/index.vue'
Vue.component('lockrepair',lockrepair)
import locksafe from './pages/locksafe/index.vue'
Vue.component('locksafe',locksafe)
import lockrecord from './pages/lockrecord/index.vue'
Vue.component('lockrecord',lockrecord)
import lockcount from './pages/lockcount/index.vue'
Vue.component('lockcount',lockcount)

import person from './pages/person/index.vue'
Vue.component('person',person)

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

 



