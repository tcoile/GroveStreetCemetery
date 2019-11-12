import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { store } from './store'

Vue.use(BootstrapVue);

// set up vuex for global variables
import Vuex from 'vuex'
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
	store,
  render: h => h(App),
}).$mount('#app')
