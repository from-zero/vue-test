<template>
    <div class="wrapper">
        <div @click="toggle"> 
            {{model.title}} 
            <template v-if='isFolder'>
                <span v-if='isOpen'>-</span>
                <span v-else>+</span>
            </template>
        </div>
        <div v-show='isOpen' v-if='isFolder'>
            <Tree v-for='cd in model.children' :model='cd' :key='cd.title'></Tree>
        </div>
    </div>
</template>

<script>
    export default {
       name:'Tree',
       props:{
           model:Object,
       } ,
       data(){
           return {
               isOpen:false
           }
       },
       mounted() {
           console.log(this.model)
       },
       computed: {
           isFolder(){
               return this.model && this.model.children&& this.model.children.length > 0
           }
       },
       methods: {
           toggle(){
               this.isOpen = !this.isOpen
           }
       },
    }
</script>

<style scoped>
    .wrapper{
        position: relative;
        top:5px;
        left:15px;
    }
</style>