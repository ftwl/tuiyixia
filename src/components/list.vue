<template>
    <div class="list">
        <div class="kind">
            <i :class="iconName"></i>
            <a><slot></slot></a>
        </div>
        <i class="cubeic-arrow"></i>
    </div>
</template>

<script>
export default {
    props:{
        iconName:String,
        listName:String
    }
}
</script>

<style lang="stylus" scoped>
    .list
        display :flex
        flex-direction :row
        align-items :center
        justify-content :space-between
        width :100%
        height :2.75rem
        background :#fff
        .kind
            margin-left :.94rem
            .icon-dingdan
                color :#333
            a
                color :#333
                font-size:.88rem
                font-weight:400
                margin-left :.59rem
        .cubeic-arrow
            color :#a7a7a7
            margin-right :.94rem
</style>



