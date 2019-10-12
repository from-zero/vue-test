<template>
    <div>
        <slot></slot>
        <div>
            <slot name='content' foo='自己写的'></slot>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>