<template>
    <div class="container">
        <back-header title="订单确认"></back-header>
        <product 
            class="product"
            :image="image"
        ></product>
        <ensure-footer></ensure-footer>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import Product from '@/components/product'
import EnsureFooter from '@/components/ensure-footer'

export default {
    components:{
        BackHeader,
        Product,
        EnsureFooter
    },
    data(){
        return({
            value:'',
            image:require('../assets/images/1.jpg')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .container
        overflow:hidden
        .product
            margin-top:3rem
</style>

