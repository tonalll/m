// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

import Hello from './components/Hello.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Home from './components/Home.vue'

import wilddog from 'wilddog'
import g from './global.js'
// 暴露全局对象，方便调用
window.g=g;
g.addObj('wilddog',wilddog);


Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/' ,component:Home},
    // params are denoted with a colon ":"
    { path: '/page1',component:Page1 },
    // a param can be made optional by adding "?"
    { path: '/Page2',component:Page2}
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
    Page1,
    Page2
  }
})
