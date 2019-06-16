<template>
    <div class="container">
        <div class="commodity">
            <img :src="image"/>
            <div class="info">
                <p>新贝音乐餐厅90代100元券，商优惠...</p>
                <span>限购3件</span>
            </div>
            <span class="money">¥90.00</span>
        </div>
        <div class="line"></div>
        <div class="actions">
            <span>购买数量</span>
            <div class="counts">
                <label class="counter">-</label>
                <input />
                <label class="counter">+</label>
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
        width :100%
        border-top:1px solid #dedede
        background :#fff
        .commodity
            display :flex
            flex-direction :row
            justify-content :space-between
            align-items :center
            height :4.84rem
            margin-left :.88rem
            img 
                width :3.38rem
                height :3.38rem
            .info
                margin-left :.59rem
                p
                    margin-bottom :1.69rem
                    font-size:.88rem
                    color :#333
                span 
                    margin-top :1.69rem
                    font-size:.68rem
                    color :#b8b8b8
            .money
                color :#fc5467
                font-size:.88rem
                font-weight:400
                margin-right :.91rem
        .line
            margin-left :.88rem
            width :100%
            height :1px
            background :#dedede
        .actions
            display :flex
            flex-direction :row
            align-items :center
            justify-content :space-between
            height :2.69rem
            background :#fff
            font-size:.88rem
            margin-left :.88rem
            margin-right :.91rem
            .counts
                display :flex
                flex-direction :row
                border :1px solid #dedede
                height :1.69rem
                .counter
                    font-size :1.69rem
                    font-weight :200
                    color :#a7a7a7
                    width :1.69rem
                    height :100%
                    line-height :1.49rem
                    text-align :center
                input 
                    width :2.56rem
                    height :100%
                    border-left:1px solid #dedede
                    border-right:1px solid #dedede
                    text-align :center
</style>


