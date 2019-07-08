<template>
    <div class="footer">
        <div class="icon right">
            <i class="iconfont icon-zhuye"></i>
            <span>主页</span>
        </div>
        <div class="icon">
            <i class="iconfont icon-kefu"></i>
            <span>客服</span>
        </div>
        <cube-button :primary="true">立即购买</cube-button>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="stylus" scoped>
    .footer
        position :fixed
        display :flex
        flex-direction :row
        align-items :center
        justify-content :center
        bottom :0
        width :100%
        height:3.12rem
        .icon
            display :flex
            flex-direction :column
            align-items :center
            justify-content :center
            width :18%
            height :100%
            background :#fff
            border-top:1px solid #eee
            .iconfont
                font-size:1.4rem
            span 
                font-size :.69rem
                margin-top :.28rem
        .right
            border-right:1px solid #eee
        .cube-btn
            width :64%
            font-size:1.06rem
</style>

