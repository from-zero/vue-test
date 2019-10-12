<template>
    <div>
        <label>my name is grandson</label>
        <div @click="()=>{this.$emit('click')}">{{name}}</div>
    </div>
</template>

<script>
export default {
    inject:['grandson'],
    data(){
        return {name: this.grandson.name}
    }
}
</script>