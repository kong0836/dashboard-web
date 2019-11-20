// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// base
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import Navigation from 'vue-navigation'

// JS
import router from './router'
import '@/mock/index'

// CSS
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'

Vue.config.productionTip = false
Vue.use(ElementUI, {size: 'medium'})
Vue.use(Navigation, {router})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
