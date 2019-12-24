// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index.js'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)


// 引入Element UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use(ElementUI)

Vue.config.productionTip = false

// 引入初始化样式
import '@/assets/styles/css/border.css'
import '@/assets/styles/css/iconfont.css'
import '@/assets/styles/css/reset.css'


//  request 拦截器
// axios.interceptors.request.use(
//   config=>{
//     if (localStorage.getItem('token')) {
//       config.headers.Authorization =localStorage.getItem('token');
//     }
//     console.log(localStorage.getItem('token'));
//     console.log(23213);
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );


/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
