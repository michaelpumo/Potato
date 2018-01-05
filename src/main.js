import Vue from 'vue'
import VueJsonp from 'vue-jsonp'
import App from './App'
import router from './router'
import store from './store'

Vue.use(VueJsonp)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
