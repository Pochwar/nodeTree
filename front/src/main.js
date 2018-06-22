import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadScript from 'vue-plugin-load-script'

Vue.config.productionTip = false

Vue.use(LoadScript)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
