<template>
    <div>
        <label>{{name}}</label>
        <slot></slot>
        <div v-show='errMsg' style="color:red">{{errMsg}}</div>
    </div>
</template>

<script>
    import Schema from 'async-validator'
    export default {
        inject:['form'],
        props: {
            name: {
                type: String,
            },
            prop:{
                type:String,
            }
        },
        data(){
            return {
                errMsg:''
            }
        },
        mounted() {
            //使用函数包裹 防止return promise 报错Error in event handler for "validate" (Promise/async)
            this.$on('validate', ()=>{ this.validate() });
        },
        methods: {
            validate(){
                console.log(this.form)
                const value = this.form.model[this.prop];
                const rule = this.form.rules[this.prop];
                const schema = new Schema({[this.prop]:rule})
                //返回的是promise
                return schema.validate({[this.prop]:value}, (err)=>{
                    if(err){
                        this.errMsg = err[0].message;
                    }else this.errMsg = ''
                })
            }
        },
    }
</script>

<style scoped>

</style>