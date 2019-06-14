<template>
    <div class="purse-box">
        <div class="loose">
            <img :src="wallet" alt="零钱"/>
            <span class="title">零钱</span>
            <span class="coin">¥25.52</span>
        </div>
        <div class="loose">
            <img :src="coin" alt="金币"/>
            <span class="title">金币</span>
            <span class="coin">1000</span>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return({
            wallet:require('../assets/images/wallet.png'),
            coin:require('../assets/images/coin.png')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .purse-box
        width :100%
        height :5.95rem
        background-color :#fff
        display :flex
        flex-direction :row
        border-top:1px solid #dedede
        border-bottom :1px solid #dedede
        .loose
            display :flex
            flex-direction:column
            justify-content :center
            align-items :center
            width :50%
            margin : 0 auto
            img
                width :1.44rem
                height :1.28rem
            .title
                font-size:0.69rem
                font-weight:400
                color :#999
                margin-top :.8rem
            .coin
                font-size:0.94rem
                color :#333333
                font-weight:bold
                margin-top :.47rem
</style>


