import Vue from 'vue'
import App from './App.vue'

import './plugins/axios'
import vuetify from './plugins/vuetify'

import router from './router'
import store from './store/store'

const dotenv = require('dotenv')
dotenv.config()

Vue.config.productionTip = false

Vue.filter('currency', value => {
    return '$ ' + value.toLocaleString()
})

new Vue({
    vuetify, 
    router,
    store,
    render: h => h(App)
}).$mount('#app')
