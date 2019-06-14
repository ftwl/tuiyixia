<template>
    <div class="container">
        <span class="title">商家信息</span>
        <span class="client" :clientName="clientName">{{clientName}}</span>
        <div class="useInfo">
            <div class="use-rules" :useTime="useTime">使用时间:{{useTime}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        clientName:String,
        useTime:String
    }
}
</script>

<style lang="stylus" scoped>
    .container
        display :flex
        flex-direction :column
        background :#fff
        padding:.94rem  .88rem
        .title
            font-size:.88rem
            font-weight:bold
        .client
            margin-top:.97rem
            font-weight:400
        .useInfo
            margin-top :.19rem
            .use-rules
                margin-top:1rem
</style>


