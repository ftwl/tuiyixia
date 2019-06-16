<template>
    <div class="footer">
        <div class="paying">
            <span class="count">共1件</span>
            <a class="charge">合计<span>¥90.00</span></a>
        </div>
        <cube-button class="cube-btn" :primary="true">提交订单</cube-button>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    .footer
        position :fixed
        bottom :0
        display :flex
        flex-direction :row
        width :100%
        height :3.1rem
        .paying
            display :flex
            flex-direction :row
            align-items :center
            justify-content :center
            border-top:1px solid #cfcfcf
            background :#fff
            width :50%
            .count
                color :#b8b8b8
                font-size:.9rem
                margin-right :.6rem
            .charge
                color :#333
                font-size:.9rem
                span
                    margin-left :.3rem
                    color :#fc5366
        .cube-btn
            width :50%
            font-size:1.13rem
</style>

