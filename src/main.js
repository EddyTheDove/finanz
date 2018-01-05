window.$ = window.jQuery = require('jquery')

import Vue from 'vue'
import App from './App.vue'
import router from './routes'

require('./filters')

// Global components
import Menu from './components/menu/menu'
import Sidebar from './components/sidebar/sidebar'

Vue.component('Menu', Menu)
Vue.component('Sidebar', Sidebar)

// Event manager
window.eventBus = new Vue()

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
