import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

import sidebarModule from './modules/sidebar'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,

    modules: {
        sidebar: sidebarModule
    }
})
