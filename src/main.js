// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// base
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'

// JS
import router from './router'
// svg-icon
import './icons';

// 非生产环境, 适配MockJs模拟数据                 // api: https://github.com/nuysoft/Mock
if (process.env.NODE_ENV !== 'production') {
  require('./mock/index')
}

// CSS
import 'element-ui/lib/theme-chalk/index.css'
// import '@/theme/index'
import '@/assets/scss/index.scss'

// Vue全局配置
// 取消 Vue 所有的日志与警告
// Vue.config.silent = true

// 在调试工具中查看各个组件的加载情况
Vue.config.performance = true

// 阻止启动生产消息
Vue.config.productionTip = false

Vue.use(ElementUI, {size: 'medium'})
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
