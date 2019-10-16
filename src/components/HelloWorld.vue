<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div> mycount: {{$store.state.mycount}} </div>
    <div> counter : {{$store.state.counter}} </div>
    <button @click='add'>+</button>
    <button @click='addval'>+val</button>
    <div>getters1: {{$store.getters.score}}</div>
    <div style="height:50px"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    add(){
      this.$store.commit('increment')
    },
    addval(){
      this.$store.dispatch('incrementAsync', 3)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
