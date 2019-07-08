<template>
    <div class="info"  :prefix="prefix"  :content="content"><p>{{prefix}}</p><slot></slot><span>{{content}}</span></div>
</template>

<script>
export default {
    props:{
        prefix:String,
        connector:{
            type:String,
            default:':'
        },
        content:String
    }
}
</script>

<style lang="stylus" scoped>
    .info
            display :flex
            flex-direction :row
            color :#919699
            margin : .6rem 0
            font-size:.69rem
            p
                width :3.06rem
                text-align-last:justify
                text-align:justify
                text-justify:distribute-all-lines
            span 
                color :#333
                margin-left :.4rem
</style>

