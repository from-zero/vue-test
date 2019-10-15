<template>
    <div>
        <input type='checkbox' :checked="checked"  @change="change"/>
    </div>
</template>

<script>
    export default {
        props:{
            checked:{type:Boolean,default:false},

        },
        /*
        model:{
            prop:'checked',
            event:'change'
        },*/
        methods: {
            change(e){
                console.log(e.target.checked)
                this.$emit('update:checked',e.target.checked)
            }
        },   
    }
</script>

<style lang="scss" scoped>

</style>