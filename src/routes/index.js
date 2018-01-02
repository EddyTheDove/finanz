import Vue from 'vue'
import Router from 'vue-router'

// Pages
import HomePage from '../pages/home/home'
import AccountPage from '../pages/account/account'

Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', name: 'home', component: HomePage },
        { path: '/account', name: 'account', component: AccountPage }
    ]
})
