<template>
    <div>
        <slot></slot>
    {{model}}
    </div>
</template>

<script>
    export default {
        provide(){
            return {form:this}
        },
       props:{
           model:{
               type:Object,
               required:true
           },
           rules:{
               type:Object
           }
       },
       methods: {
        validate(cb){
            const lst = this.$children.filter(item=> item.prop) //item.prop为true则加入数组,返回一个新数组
                .map(item=>item.validate());
                Promise.all(lst).then(()=>cb(true)).catch(()=>cb(false));
        }
       },
    }
</script>

<style scoped>

</style>