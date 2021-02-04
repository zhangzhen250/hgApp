import Vue from 'vue'
import App from './App'

import store from './store'

Vue.config.productionTip = false

Vue.prototype.$store = store

import api from '@/common/vmeitime-http/'
Vue.prototype.$api = api

App.mpType = 'app'

const app = new Vue({
	store,
	...App
})
app.$mount()
