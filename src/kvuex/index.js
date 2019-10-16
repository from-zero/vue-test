let Vue;
class Store {
    static install (_Vue){
        console.log(_Vue)
        Vue = _Vue;
        Vue.mixin({
            beforeCreate() {
                if(this.$options.store){
                    Vue.prototype.$store = this.$options.store;
                }
            },
        })
    }
    constructor($options){
        this.$options = $options;
        this.state = new Vue({
            data:$options.state
        });
        this.mutations = $options.mutations;
        this.actions = $options.actions;
        $options.getters && this.initGetters($options.getters);
    }
    commit=(type, val)=>{
        this.mutations[type](this.state, val);
    }
    dispatch(type, val){
        this.actions[type]({
            commit:this.commit,
            state:this.state
        },val)
    }
    initGetters(getters){
        this.getters = {};
        let that = this;
        Object.keys(getters).forEach(key=>{
            Object.defineProperty(this.getters, key, {
                get(){
                    return getters[key](that.state);
                }
            })
        })
    }
}
export default {Store, install: Store.install};