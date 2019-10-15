<template>
    <div class='wrapper' v-show='isShow'>
        <h3>{{title}}</h3>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '弹窗'
            },
            content: {
                type: String,
                default:'我是弹窗'
            }
        },
        data(){
            return {
                isShow:false
            }
        },
        methods: {
            show(){
                this.isShow = true;
                setTimeout(()=>{
                    this.hide()
                },3000)
            },
            hide(){
                this.isShow = false;
                this.remove()
            }
        },
    }
</script>

<style scoped>
    .wrapper{
        position: absolute;
        top:0;
        left: 250px;
        width: 500px;
        height:400px;
        background: pink;
        border: red 1 px solid
    }
</style>