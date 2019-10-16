<template>
    <div>
        <span v-for='(item, inx) in list' :key='inx'>
            <router-link :to='item.path'>{{item.name}}</router-link>/
        </span>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                list:[{name:'home', path:'/'}]
            }
        },
        mounted() {
            console.log(this.$route)
        },
        watch: {
            $route:function(n, o){
                console.log(n, o)
                this.list = n.matched.map(item=>({ path: item.path, name:item.name}) )
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>