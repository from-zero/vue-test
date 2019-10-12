import Vue from 'vue'
import App from './App.vue'
import './icons';
Vue.config.productionTip = false
Vue.prototype.$dispatch = function(event, data){
  let parent = this.$parent;
  while(parent){
    parent.$emit(event, data);
    parent = parent.$parent;
  }
}
new Vue({
  render: h => h(App),
}).$mount('#app')
