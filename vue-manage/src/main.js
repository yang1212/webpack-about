import Vue from 'vue'
import 'normalize.css/normalize.css'// A modern alternative to CSS resets
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
// import '@common/style/common.scss'

Vue.use(elementUI, {
  size: 'medium'// set element-ui default size
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
