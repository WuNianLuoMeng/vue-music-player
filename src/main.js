// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import APlayer from '@moefe/vue-aplayer';
import Axios from 'axios'
import add from './add.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(APlayer, {
  defaultCover: 'https://github.com/u3u.png',
  productionTip: true,
});
Vue.use(MintUI)             //MintUI框架
Vue.config.productionTip = false
Vue.prototype.$axios = Axios   
Vue.prototype.$add=add
Vue.prototype.$Vue=Vue
Vue.prototype.$app=App
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
