<template>
    <div class="set-container">
        <back-header title="设置"></back-header>
        <div class="set-content" style="border-top:1px solid #dedede;">
            <pay-list class="list" title="手机号" :isLink="true" content="151****8208"></pay-list>
            <in-line />
            <pay-list class="list" title="登录密码" :isLink="true"></pay-list>
        </div>
         <div class="set-content" style="margin-top:0;">
            <pay-list class="list" title="支付设置" :isLink="true"></pay-list>
            <in-line />
            <pay-list class="list" title="关于我们" content="版本号:10.1.65" :isLink="true"></pay-list>
        </div>
        <div class="quit">退出登录</div>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import PayList from '@/components/pay-list'
import InLine from '@/components/inline'
export default {
    components:{
        BackHeader,
        PayList,
        InLine
    }
}
</script>

<style lang="stylus" scoped>
    .set-container
        width :100%
        overflow :hidden
        .set-content
            width:100%
            margin-top:3rem
            margin-bottom :.88rem
            background :#fff
            .list
                margin-right :.81rem
                span 
                    color :#b8b8b8
                    margin-right :.5rem
        .quit
            display :flex
            flex-direction :row
            align-items :center
            justify-content :center
            width :100%
            height :2.75em
            background :#fff
            font-size:.88rem
</style>


