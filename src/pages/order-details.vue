<template>
    <div class="container">
        <back-header title="订单详情"></back-header>
        <div class="content">
            <order-card :image="image"></order-card>
        </div>
        <details-info class="details-info" title="商家信息">
            <div class="store">
                <span>新贝乐意大利餐厅</span>
                <i class="iconfont icon-weibiaoti-"></i>
            </div>
            <div class="address">
                <i class="iconfont icon-dizhi">2.1km |</i>
                <span>崇川区工农路印象B1-14(迪卡侬斜对面)</span>
            </div>
        </details-info>
        <details-info class="QR" title="优惠券码">
                <div class="qr-num" :qr="qr">{{qr}}张可用<span>2019-07-10到期</span></div>
                <QR :qr="qr" :bar_code="bar_code" :qr_code="qr_code"/>
        </details-info>
        <details-info class="reminder" title="温馨提示">
            <div class="hint">
                <info prefix="有效期" content="2019.6.1至2019.6.30（周末、法定节假日通用）">:</info>
                <info prefix="使用时间" content="10:30—22:20">:</info>
                <info prefix="适用范围" content="除酒水、饮料外全场通用">:</info>
                <info prefix="使用规则" content="1、团购用户不可同时享受商家其他优惠">:</info>
                <info  content="2、节假日不提供预约服务">&nbsp;</info>
            </div>
        </details-info>
        <details-info class="reminder" title="订单信息">
            <div class="hint">
                <info prefix="订单号" content="5070429284">:</info>
                <info prefix="手机号" content="151****8208">:</info>
                <info prefix="付款时间" content="2019-4-24 12:42">:</info>
            </div>
        </details-info>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import OrderCard from '@/components/order-card'
import DetailsInfo from '@/components/details-info'
import QR from '@/components/QR'
import Info from '@/components/info'
export default {
    components:{
        BackHeader,
        OrderCard,
        DetailsInfo,
        QR,
        Info
    },
    data(){
        return({
            image:require('../assets/images/order.png'),
            qr:2,
            bar_code:require('../assets/images/bar-code.png'),
            qr_code:require('../assets/images/qr-code.png')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .container
        .content
            margin-top:3rem
            border-top:1px solid #dedede
        .details-info
            margin-bottom :.72rem
            .store
                display :flex
                flex-direction :row
                align-items :center
                justify-content :space-between
                font-size:.88rem
                margin-top :.84rem
                i 
                    color :#b8b8b8
                    font-size:1.38rem
            .address
                color :#b8b8b8
                margin-top:.66rem
                .iconfont
                    font-size:.68rem
                span 
                    color :#333
                    font-size:.68rem
                    margin-left :.03rem
        .QR
            .qr-num
                color :#b8b8b8
                font-size:.69rem
                margin-top :1.09rem
                span 
                    margin-left:.63rem
        .reminder
            margin-top :.69rem
            .hint
                margin-top :.54rem

</style>


