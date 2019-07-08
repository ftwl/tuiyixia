<template>
    <div class="container">
        <img class="commodity" :src="image" />
        <p class="info">
            上岛赫本时光】700㎡的花园餐厅,9.9元抢购10元优惠券，周六周日通用！
        </p>
        <div class="price">
            <div class="money">
                <a>¥9.90</a>
                <span>¥100.00</span>
            </div>
            <div class="buy">
                <span>已售:256</span>
                <button class="button" type="button" @click="shop">立即购买</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        image:String
    },
    methods:{
        shop(){
            this.$emit('ListenShop')
        }
    }
}
</script>
<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :column
        width : 100%
        border-bottom : 1px solid #dedede
        .commodity
            display :flex
            height :9.5rem
            margin-right :.88rem
            margin-left: .88rem
            border-radius:.2rem
        .info
            margin-right :.88rem
            margin-left: .88rem
            margin-top :.88rem
            font-size:1rem
            color :#333
            line-height :1.32rem
        .price
            display: flex
            flex-direction : row
            align-items :center
            justify-content:space-between
            margin-bottom :.75rem
        .money
            margin-right :.88rem
            margin-left: .88rem
            margin-top :.68rem
            margin-bottom : .5rem
            font-size: 1.25rem
            vertical-align:bottom
            a
                color : #fc5467
                font-weight: bold
            span
                text-decoration :line-through
                margin-left :.9rem
                font-size:.875rem
                color :#b8b8b8
                align-self: center
        .buy
            display :flex
            flex-direction :row
            align-items :center
            margin-right :1rem
            margin-top :.5rem
            span
                margin-right :.9rem
                font-size: 0.875rem
                color :#b8b8b8
            .button
                width :5rem
                height :1.68rem
                font-size:.84rem
                background :#fc5467
                color :#fff
                border : #fc5467
                border-radius:.2rem
                

</style>

