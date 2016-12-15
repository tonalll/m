<template>
<div style="width:100%;height:100%;display:flex; flex-direction: column;">
  <div class="" style="height:1rem;background:#333;color:#fff;">
    头部
  </div>
  <div class="" style="flex:1;">
    <router-view keep-alive transition transition-mode="out-in"></router-view>
  </div>
  <div class="">

    <Row total=3 class="" bgColor='#ddd'>
      <lCol v-for='_menu in menu' width='100%'>
      <router-link :to=_menu.url>{{_menu.title}}</router-link>
    </lCol>

      <!-- <lCol width='100%'>
      <router-link to="/">首页</router-link>
    </lCol>
      <lCol width='100%'>
      <router-link to="/aaa">aaa</router-link>
    </lCol>
      <lCol width='100%'>
      <router-link tag="span" to="/bbb">
        <span>bbb</span>
      </router-link>
    </lCol> -->
    </Row>
  </div>
</div>
</template>

<script>
import Tmp from './components/Tmp.vue'
import lCol from './components/Col.vue'
import Row from './components/Row.vue'

export default {
  name: 'app',
  data(){
    return{
      menu:[]
    }
  },
  mounted(){
    var vm=this;
    var config={
      syncURL:"https://m-vue.wilddogio.com"
    };
    wilddog.initializeApp(config);
    var ref=wilddog.sync().ref();
    // g.addObj('ref',ref)
    ref.child('/').on('child_added',function(snapshot){
      var text=snapshot.val();
      vm.menu.push(text);
      console.info('新增节点',text);
    });

  },
  components: {
    Tmp,
    lCol,
    Row
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
