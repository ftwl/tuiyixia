<template>
    <div class="details-header">
        <i class="iconfont icon-fanhui-"></i>
        <span :title="title">{{title}}</span>
        <img class="share" v-if="showShare" :src="share" />
    </div>
</template>

<script>
export default {
    props:{
        showShare:{
            default:false
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return({
            share:require('../assets/images/share.png')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .details-header
        position :fixed
        top:0
        display :flex
        flex-direction :row
        align-items :center
        justify-content :center
        width :100%
        height :3rem
        background :#fff
        i 
            position :absolute
            font-size :1.4rem
            margin-left .8rem
            margin-right :.8rem
            left :0
        span
            font-size:1.06rem
            color :#333
            font-weight:400
        .share
            position :absolute
            width :1.28rem
            height :1.31rem
            margin-right :.91rem
            right:0
</style>


