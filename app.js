import Vue from 'vue'
import App from './App.vue'

Vue.component('HelloWorld', require('./Hello.vue').default)

new Vue({
	el: '#app',
	render: h => h(App)
})
