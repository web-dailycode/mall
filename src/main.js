// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

/* eslint-disable no-new */
const vue = new Vue({
  el: '#app',
  // components: { App },
  router,
  store,
  // template: '<App/>'
  render: h => h(App)
})
window.Vue = vue
export default vue