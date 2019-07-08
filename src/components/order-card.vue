<template>
    <div class="container">
        <div class="title">
            <img :src="image" />
            <div class="info">
                <p>新贝音乐餐厅90代100元券商业优惠</p>
                <span>限购3件</span>
            </div>
        </div>
        <div class="price">
            <span>¥ 90.00</span>
            <i class="cubeic-arrow"></i>
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
        flex-direction :row
        align-items :center
        justify-content :space-around
        padding-top:.75rem
        padding-bottom:.75rem
        background :#fff
        margin-bottom :.88rem
        .title
            display :flex
            flex-direction :row
            align-items :center
            img
                width :3.38rem
                height:3.38rem
            .info
                display :flex
                flex-direction :column
                width :12.5rem
                font-size:.88rem
                margin-left :.59rem 
                p
                    overflow :hidden
                    text-overflow: ellipsis
                    white-space:nowrap
                    margin-bottom :.6rem
                span 
                    color :#b8b8b8
                    font-size:.68rem
                    margin-top :.6rem
        .price
            span 
                color :#fc5366
            i 
                color :#a7a7a7
                margin-left :.84rem
                
</style>

