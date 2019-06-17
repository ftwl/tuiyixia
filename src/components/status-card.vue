<template>
    <div class="container">
        <div class="top">
            <div class="title" :title="title">{{title}}</div>
            <span class="colors" v-if="payed">待消费</span>
            <span class="colors" v-if="nopay">待支付</span>
            <span class="tint" v-if="end">已完成</span>
            <span class="tint" v-if="timeout">付款超时</span>
        </div>
        <div class="center">
            <img :src="image" />
            <div class="info">
                <a>1张 | 总价<span>¥90.0</span></a>
                <p>有效期至:2019-07-10</p>
            </div>
        </div>
        <div class="line"></div>
        <div class="footer">
            <div class="btn" v-if="del && !payed">删除</div>
            <div class="btn pink" v-if="nopay">支付</div>
            <div class="btn pink" v-if="payed">查看券码</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String,
        payed:Boolean,
        nopay:Boolean,
        end:Boolean,
        timeout:Boolean,
        del:{
            type:Boolean,
            default:true
        },
        image:String
    },
}
</script>

<style lang="stylus" scoped>
    .container
        background :#fff
        margin-bottom :.88rem
        padding-top: .88rem
        padding-left:.88rem
        margin-left:.88rem
        padding-right :.88rem
        border-radius:.3rem
        .top
            display :flex
            flex-direction :row
            align-items :center
            justify-content :space-between
            .title
                width :14.88rem
                overflow :hidden
                white-space:nowrap
                text-overflow: ellipsis
                font-size:.88rem
            .colors
                font-size:.75rem
                color :#fc5366
            .tint
                font-size:.75rem
                color :#b8b8b8
                margin-right :.88rem
        .center
            display :flex
            flex-direction :row
            align-items :flex-start
            margin-top :.66rem
            padding-bottom :.88rem
            img 
                width :3.38rem
                height :3.38rem
            .info
                font-size:.75rem
                margin-left :.47rem
                a
                    display :inline-block
                    color :#333
                    margin-top :.22rem
                    font-weight : bold
                    span
                        color:#fc5366
                        margin-left :.5rem
                        font-weight : bold
                p
                    margin-top :.75rem
                    font-size:.69rem
                    color :#b8b8b8
        .line
            width :100%
            height :1px
            background :#dedede
        .footer
            display :flex
            flex-direction :row
            align-items :center
            justify-content :flex-end
            width :100%
            height :2.59rem
            font-size:.75rem
            .btn
                display :flex
                flex-direction :row
                align-items :center
                justify-content :center
                padding:.3rem .5rem
                border :1px solid #b8b8b8
                border-radius:.2rem
                color :#b8b8b8
                margin-left :.91rem
            .pink
                color :#fc5467
                border :1px solid #fc5467
                border-radius:.2rem


                
</style>

