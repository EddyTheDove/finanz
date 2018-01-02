import Vue from 'vue'
import App from './App.vue'
import router from './routes'

require('./filters')

// Global components
import Menu from './components/menu/menu'
Vue.component('Menu', Menu)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
