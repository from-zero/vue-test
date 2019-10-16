import Vue from 'vue'
// import Vuex from 'vuex'
import Vuex from './kvuex'
console.log(Vuex.install)
Vue.use(Vuex)
const modulesA = {
  namespaced:true,
  state:{mycount:0},
  mutations: {
    increment(state, val){
      state.mycount += 1
    },
    incrementVal(state, val){
      state.mycount += val;
    }
  },
  getters:{
    score(state){
      return '我的'+state.mycount
    }
  },
};
const count = {
  namespaced:true,
  state: {
    counter: 0
  },
  mutations: {
    increment(state, val){
      state.counter += 1
    },
    incrementVal(state, val){
      state.counter += val;
    }
  },
  getters:{
    score(state){
      return '共计'+state.counter
    }
  },
  actions: {
    async incrementAsync({commit, state, dispatch}, val){
      await setTimeout(()=>{
        commit('incrementVal', val)
      },1000)
    }
  }
}


export default new Vuex.Store(
  count
  // { modules:{count:count, mycount:modulesA} }
)
