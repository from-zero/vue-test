let Vue;
class Router{
    constructor(options){
        this.$options = options;
        this.app = new Vue({
            data(){
                return {
                    current:'/'
                }
            }
        })
    }
    init(){
        this.initEvent();
        this.formatRoute();
        this.initComponents();
    }
    initEvent(){
        window.addEventListener('load', this.hashChange.bind(this))
        window.addEventListener('hashchange',this.hashChange.bind(this))
    }
    hashChange(){
        this.app.current = location.hash.slice(1);
    }
    formatRoute(){
        this.routeMap = {};
        this.$options.routes.forEach(element => {
            this.routeMap[element.path] = element.component;
        });
    }
    initComponents(){
        let that = this;
        Vue.component('router-link',{
            props:{
                to:{type:String, required:true}
            },
            render(h){
                console.log(this)
                console.log(this.$slots)
                return h('a',{attrs:{href:'#'+this.to}}, [this.$slots.default])
            }
        })
        Vue.component('router-view', {
            render(h){
                let comp = that.routeMap[that.app.current];
                console.log(comp)
                return h(comp)
            }
        })
    }
    static install(_Vue){
        Vue = _Vue;
        Vue.mixin({
            beforeCreate() {
                if(this.$options.router){
                    Vue.prototype.$router = this.$options.router;
                    this.$options.router.init();
                }
            },
        })
    }
}
export default Router