<template>
    <div>
        <Tree :model='model'></Tree>
    </div>
</template>

<script>
    import Tree from './Tree.vue'
    export default {
        components:{
            Tree
        },
        data(){
            return {
                model:{
                    title:'1',
                    children:[
                        {title:'11',children:[
                            {title:'11-1',children:[]}
                        ]},
                        {title:'22',children:[
                            {title:'22-1',children:[
                                {title:'22-1-1',children:[]}
                            ]},
                            {title:'22-2',children:[]}
                        ]},
                        {title:'33',children:[]},
                        {title:'44',children:[]}
                    ]
                }
            }
        }       
    }
</script>

<style lang="scss" scoped>

</style>