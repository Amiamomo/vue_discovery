// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// make sure to call Vue.use(Vuex) if using a module system
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 101
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--
  },
  actions: {
    increment ({ commit }) {
      commit('increment')
    },
    decrement ({ commit }) {
      commit('decrement')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  },
  router,
  template: '<App/>',
  components: { App }
})
