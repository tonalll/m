<template>
<div style="width:100%;height:100%;display:flex; flex-direction: column;">
  <div class="" style="">
    头部
  </div>
  <div class="" style="flex:1;">
    <router-view keep-alive transition transition-mode="out-in"></router-view>
  </div>
  <div class="" style="">
    <router-link to="/">首页</router-link>
    <router-link to="/aaa">aaa</router-link>
    <router-link to="/bbb">bbb</router-link>
    <router-link tag="span" to="/bbb">
      <span>bbb</span>
    </router-link>

  </div>

</div>
</template>

<script>
import Tmp from './components/Tmp'

export default {
  name: 'app',
  components: {
    Tmp
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
