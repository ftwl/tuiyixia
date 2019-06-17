<template>
    <div class="container">
        <span :title="title">{{title}}</span>
        <div class="right">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    }
}
</script>


<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :row
        align-items :center
        justify-content :space-between
        width :100%
        height :3rem
        background :#fff
        padding-left :.91rem
        span 
            font-size:.88rem
        .right
            margin-right :.91rem
</style>

