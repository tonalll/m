// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello.vue'
import Aaa from './components/Aaa.vue'
import Bbb from './components/Bbb.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/' },
    // params are denoted with a colon ":"
    { path: '/aaa',component:Aaa },
    // a param can be made optional by adding "?"
    { path: '/bbb',component:Bbb}
  ]
})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Hello,
    Aaa,
    Bbb
  }
})
