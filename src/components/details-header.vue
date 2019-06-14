<template>
    <div class="details-header">
        <i class="iconfont icon-fanhui-"></i>
        <img class="share" :src="share" />
    </div>
</template>

<script>
export default {
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
        justify-content :space-between
        width :100%
        height :3rem
        background :#fff
        i 
            font-size :1.4rem
            margin-left .8rem
            margin-right :.8rem
        .share
            width :1.28rem
            height :1.31rem
            margin-right :.91rem
</style>


