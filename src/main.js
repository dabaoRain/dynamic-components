import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import SwitchComponents from '@/pages/components/swicth'
Vue.component('SwitchComponents', SwitchComponents)

import router from '@/router/index'



new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
