window.$ = window.jQuery = require('jquery')

import Vue from 'vue'
import App from './App.vue'
import router from './routes'
import store from './store'

// import filters globally
require('./filters')

// Global components
import Menu from './components/menu/menu'
import Footer from './components/footer/footer'
import Sidebar from './components/sidebar/sidebar'
import IncomeModal from './components/modals/income'
import expenseModal from './components/modals/expense'

Vue.component('Menu', Menu)
Vue.component('Footer', Footer)
Vue.component('Sidebar', Sidebar)
Vue.component('IncomeModal', IncomeModal)
Vue.component('expenseModal', expenseModal)

// Event manager
window.eventBus = new Vue()

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
