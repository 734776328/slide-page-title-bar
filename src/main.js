import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/rem.js'
import './style/common.css'
// import upLoadDownRefresh from 'refresh-load-plugin'
// import 'refresh-load-plugin/lib/refresh-load-plugin.css'
Vue.config.productionTip = false
// Vue.use(upLoadDownRefresh)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
