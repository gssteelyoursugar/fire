import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: false,
    userInfo: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo') : []
  },
  mutations: {
    saveLoginStatus(state, data) {
      localStorage.setItem('token',data.token)
      localStorage.setItem('isLogin',true)
      state.userInfo = localStorage.getItem('userInfo')
    }
  },
  actions: {}
});


export default store;
