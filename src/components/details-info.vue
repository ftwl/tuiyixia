<template>
    <div class="container">
        <span class="title" :title="title">{{title}}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        title:String
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
</style>


