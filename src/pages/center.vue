<template>
    <div class="container">
        <div class="actions">
            <img class="set" :src="set" alt="设置"/>
            <img class="news" :src="news" alt="消息"/>
        </div>
        <div class="user">
            <img :src="avater" alt="头像"/>
            <a>峰腾网络</a>
        </div>
        <div class="vip-container">
            <div class="vip">
                <div class="crown">
                    <img :src="crown" alt="皇冠"/>
                    <a>开通会员,尊享全部特权</a>
                </div>
                <div class="dredge">
                    开通会员
                </div>
            </div>
        </div>
        <div class="personal-center">
            <purse></purse>
            <div class="message"> 
                <list iconName="iconfont icon-dingdan">订单</list>
                <div class="line"></div>
                <list iconName="iconfont icon-hongbao">红包</list>
                <div class="line"></div>
                <list iconName="iconfont icon-renwuguanli">任务</list>
                <div class="line"></div>
                <list iconName="iconfont icon-yaoqingma">邀请码</list>
            </div>
            <div class="message">
                <list iconName="iconfont icon-Member">商户会员</list>
                <div class="line"></div>
                <list iconName="iconfont icon-woyaochengweiquyudaili">区域代理</list>
                <div class="line"></div>
                <list iconName="iconfont icon-kefu">客服</list>
            </div>
        </div>
    </div>
</template>

<script>
import Purse from '@/components/purse'
import List from '@/components/list'
export default {
    components:{
        Purse,
        List
    },
    data(){
        return({
            avater:require('../assets/images/avater.png'),
            set:require('../assets/images/set.png'),
            news:require('../assets/images/news.png'),
            crown:require('../assets/images/crown.png')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .container
        width:100%
        height :10.865rem
        background-image :url('./assets/images/center-bg.jpg')
        background-size :100%
        .actions
            display :flex
            flex-direction :row
            width :3.58rem
            justify-content :space-between
            position :absolute
            top:2.19rem
            right :.91rem
            .set
                width:1.16rem
                height :1.09rem
            .news
                width :1.16rem
                height :1.09rem
        .user
            display :flex
            flex-direction : row
            align-items :center
            position:absolute
            top:2.81rem
            margin-left:.84rem
            img 
                width:2.81rem
                height:2.81rem
                margin-right :1.06rem
            a 
                color :#fff
                font-size: 1.14rem
                font-weight:400
                line-height:1.33rem
        .vip-container
            position:absolute
            width:100%
            height:3.53rem
            top:7.34rem
            .vip
                display :flex
                flex-direction :row
                justify-content:space-between
                align-items:center
                margin:0 auto
                width:21.69rem
                height :100%
                background:linear-gradient(45deg,rgba(226,226,226,1),rgba(234,234,234,1))
                border-top-left-radius :.625rem
                border-top-right-radius :.625rem
                .crown
                    display :flex
                    flex-direction :row
                    align-items :center
                    margin-left :1rem
                    img
                        width :1.68rem
                        height:1.68rem
                        background :#707072
                        border-radius:50%
                        margin-right :.56rem
                    a
                        color :#343333
                        font-size:0.75rem
                .dredge
                    display :flex
                    flex-direction :row
                    align-items: center
                    justify-content :center
                    width :5.3rem
                    height :1.67rem
                    background:rgba(231,197,126,1)
                    border-radius:1.67rem
                    font-size:0.75rem
                    color :#7E6737
                    margin-right :1.13rem
        .personal-center
            position :relative
            top:11.63rem
            .message
                margin-top :.75rem
                background :#fff
                border-top:1px solid #dedede
                border-bottom :1px solid #dedede
                .line
                    width :100%
                    height :1px
                    background :#dedede
                    margin-left :2.66rem
        
            
</style>

