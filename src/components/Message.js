import Vue from 'vue'
export default function(Comp, props){
    console.log(props)
    let vm = new Vue({
        render(h){
          return  h(Comp, {props})
        }
    }).$mount();
    let comp = vm.$children[0];
    document.body.appendChild(vm.$el);
    comp.remove = function(){
        document.body.removeChild(vm.$el)
        vm.$destroy();
    }
    return comp;
}