<template>
    <div class="container" :content="content">
        <span :title="title">{{title}}</span>
        <div v-if="isLink" class="link">
            <span>{{content}}</span>
            <i class="cubeic-arrow"></i>
        </div>
        <div v-else class="right">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        width:String,
        isLink:{
            type:Boolean,
            default:false
        },
        content:String
    }
}
</script>


<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :row
        align-items :center
        justify-content :space-between
        height :3rem
        background :#fff
        width :100%
        span 
            font-size:.88rem
            margin-left :.91rem
        .link
            margin-right :.91rem
            span 
                font-size:.88rem
                margin-right :.8rem
                color :#b8b8b8
            i 
                color :#a7a7a7
</style>

