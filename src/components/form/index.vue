<template>
    <div>
        <Form ref='form' :model='model' :rules='rules'> 
            <FormItem name='用户名' prop='username'>
                <Input  placeholder="请输入" v-model='model.username'/>
            </FormItem>
            <FormItem name='密码' prop='psw'>
                <Input type='password'  placeholder="请输入" v-model='model.psw'/>
            </FormItem>
            <FormItem name='协议' prop='read'>
                <Checkbox :checked.sync='model.read'/> 请阅读
            </FormItem>
            <FormItem>
                <Button @click="submit">login</Button>
            </FormItem>
        </Form>
    </div>
</template>
<script>
    import Form from './Form.vue';
    import FormItem from './FormItem.vue';
    import Input from './Input.vue';
    import Checkbox from './Checkbox.vue';
    import Message from '../Message.vue';
    export default {
        components:{
            Message,
            Form,
            Checkbox,
            FormItem,
            Input
        },
        data(){
            return {
            model:{
                username:'',
                psw:'',
                read:false
            },
            rules:{
                username:[
                    {required:true,message:'用户名必填'}
                ],
                psw:[
                    {required:true,message:'密码必填'}
                ]
            }
            }
        },
        methods: {
            submit(){
                this.$refs['form'].validate((state)=>{
                    if(state){
                        this.$notice(Message, {content:'操作成功'}).show()
                    }else {
                        this.$notice(Message, {title:'失败',content:'操作失败'}).show()
                    }
                })
            }
        },  
    }
</script>

<style scoped>

</style>