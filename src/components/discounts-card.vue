<template>
    <div class="container">
        <img class="commodity" :src="image" />
        <p class="info">
            上岛赫本时光 700㎡的花园餐厅,9.9元抢购10元优惠券，周六周日通用！
        </p>
        <div class="price">
            <div class="money">
                <a>¥9.90</a>
                <span>¥100.00</span>
            </div>
            <div class="buy">
                <span>已售:256</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        image:String
    }
}
</script>
<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :column
        width : 50%
        .commodity
            display :flex
            height :5.23rem
            margin-right :.88rem
            margin-left: .88rem
            border-radius:.2rem
        .info
            margin-right :.88rem
            margin-left: .88rem
            font-size:.81rem
            color :#333
            line-height :1.32rem
        .price
            display: flex
            flex-direction : row
            align-items :center
            justify-content:space-between
            margin-bottom :.75rem
            margin-right: 0.88rem
            margin-left: 0.88rem
        .money
            margin-right :.44rem
            margin-left: .44rem
            margin-top :.68rem
            margin-bottom : .5rem
            vertical-align:bottom
            a
                color : #fc5467
                font-weight: bold
                font-size: .88rem
            span
                text-decoration :line-through
                margin-left :.44rem
                font-size:.69rem
                color :#b8b8b8
                align-self: center
        .buy
            display :flex
            flex-direction :row
            align-items :center
            margin-right :.44rem
            margin-top :.5rem
            span
                font-size: 0.438rem
                color :#b8b8b8
                

</style>
