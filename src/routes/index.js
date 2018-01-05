import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '../pages/home/home'
import Monthly from '../pages/monthly/monthly'
import Account from '../pages/account/account'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/monthly', name: 'monthly', component: Monthly },
        { path: '/account', name: 'account', component: Account }
    ]
})
