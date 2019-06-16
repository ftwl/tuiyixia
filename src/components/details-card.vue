<template>
    <div class="container">
        <img :src="pic" alt="商品图片" />
        <div class="price">
            <div class="left">
                <a>¥9.90</a>
                <span>¥10.0</span>
            </div>
            <div class="right">
                <i class="iconfont icon-icon4"></i>
                <span class="like">3394喜欢</span>
            </div>
        </div>
        <p class="content">上岛赫本时光 700㎡的花园餐厅，9.9元抢购10元优惠券，周六周日通用！</p>
        <div class="footer">
            <div class="footer-left">
                <span>已售256件</span>
                <span>限购3件</span>
            </div>
            <div class="footer-right">
                <span>只剩40件</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        pic:String
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :column
        background :#fff
        img
            width :100%
            height :10rem
        .price
            display :flex
            flex-direction :row
            align-items :center
            justify-content :space-between
            padding-top:.81rem
            padding-left :.88rem
            padding-right:.88rem
            padding-bottom:.97rem
            .left
                display:flex
                flex-direction :row
                align-items :center
                a
                   font-size:1.13rem
                   color :#fc5467
                   font-weight:bold
                span
                    font-size:.69rem
                    color:#b8b8b8
                    text-decoration  :line-through
                    margin-left :.81rem
            .right
                display :flex
                flex-direction :row
                color :#fc5467
                .icon-icon4
                    font-size:.6rem
                .like
                    font-size:.69rem
                    margin-left :.4rem
                    font-weight:400 
        .content
            margin-left :.88rem
            margin-right :.88rem
            font-size:.88rem
            color :#333
            line-height :1.33rem
        .footer
            display :flex
            flex-direction :row
            align-items :center
            justify-content :space-between
            margin-left :.24rem
            margin-right :.88rem
            margin-top :1rem
            margin-bottom :.75rem
            .footer-left
                span
                    font-size:.69rem
                    color :#b8b8b8
                    margin :0 .64rem
            .footer-right
                span 
                    font-size :.69rem
                    color :#b8b8b8
        


</style>


