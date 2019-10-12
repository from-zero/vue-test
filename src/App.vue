<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <svg>
      <use xlink:href='#icon-blue' />
    </svg>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div style='color:red'>
      {{desc}}
    </div>
    <!-- <Child ref='xx' name="zero"></Child> -->
    <!-- <Child name="zwz" @notice='notice'></Child> -->
    <FormSample></FormSample>
    <MySlot>hhhh</MySlot>
    <MySlot>
      title
      <template v-slot:content='ctx'>content{{ctx.foo}}</template>
      aaaa
    </MySlot>
  </div>
</template>

<script>
import FormSample from './components/form'
import Child from './components/Child.vue'
import MySlot from './components/MySlot.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  provide(){
    return {'grandson':{name:'pig'}}
  },
  data() {
    return {
      desc:''
    }
  },
  components: {
    FormSample,
    MySlot,
    Child,
    HelloWorld
  },
  mounted() {
    console.log(this.$refs)
    // this.$refs.xx.myname = 'hi'
    console.log(this.$children)
    this.$on('hello',(m)=>{
      this.desc = m;
    })
  },
  methods: {
    notice(m){
      console.log(m)
    }
  },
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
