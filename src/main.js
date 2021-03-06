import Vue from 'vue'
import App from './App.vue'
import './icons';
import notice from './components/Message.js';
import router from './router'
import store from './store'
Vue.config.productionTip = false
Vue.prototype.$dispatch = function(event, data){
  let parent = this.$parent;
  while(parent){
    parent.$emit(event, data);
    parent = parent.$parent;
  }
}
Vue.prototype.$notice =  notice;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
