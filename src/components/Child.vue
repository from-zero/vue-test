<template>
    <div>
        <label>{{myname}}</label>
        <Grandson style="cursor:pointer" @click="()=>this.$dispatch('hello','my name is grandson')"></Grandson>
    </div>
</template>
<script>
import Grandson from './Grandson.vue'
export default{
    components:{
        Grandson
    },
    props: {
        name: {
            type: String,
            default: 'hello',
            require:true
        },
    },
    data() {
        return {
            myname:this.name
        }
    },
    mounted() {
        console.log(this.$dispatch)
        this.$emit('notice', this.myname)
    },
}
</script>