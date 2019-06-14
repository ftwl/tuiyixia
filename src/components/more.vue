<template>
    <div class="container">
        <div class="discounts">
            <i class="iconfont icon-youhuiquan"></i>
            <span>更多优惠</span>
        </div>
        <slot></slot>
        <div class="line"></div>
        <div class="show-more">
            <span>查看其他优惠</span>
            <i class="cubeic-select"></i>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .container
        position:relative
        display :flex
        flex-direction :column
        background :#fff
        .discounts
            display :flex
            flex :row
            padding-top:.81rem
            margin-left :.88rem
            margin-right :.88rem
            font-size :.88rem
            color :#333
            font-weight:400
            margin-bottom :.94rem
            .icon-youhuiquan
                color :#fc5467
                font-weight:bold
                margin-right :.09rem
            span
                font-size:.88rem
                color :#333
                font-weight:400
        .line
            width :100%
            height :1px
            background :#e8e8e8
        .show-more
            display :flex
            flex-direction :row
            height :1.88rem
            align-items :center
            justify-content :center
            color :#9f9f9f
            span 
                font-size: .69rem
                
                
</style>


