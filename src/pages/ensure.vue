<template>
    <div class="container">
        <back-header title="订单确认"></back-header>
        <product 
            class="product"
            :image="image"
        ></product>
        <div class="pocket-list">
            <pay-list style="width:100%" title="零钱抵扣">
                <cube-checkbox v-model="checked" position="right">
                    ¥ 2.66
                </cube-checkbox>
            </pay-list>
        </div>
        <div class="personal-info">
            <pay-list style="width:100%"  title="姓名">
                <input type="text" class="read-in" placeholder="请输入姓名" />
            </pay-list>
            <div class="line"></div>
            <pay-list style="width:100%"  title="手机">
                <input type="number" class="read-in" placeholder="请输入联系方式" />
            </pay-list>
        </div>
        <ensure-footer></ensure-footer>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import Product from '@/components/product'
import PayList from '@/components/pay-list'
import EnsureFooter from '@/components/ensure-footer'

export default {
    components:{
        BackHeader,
        Product,
        PayList,
        EnsureFooter
    },
    data(){
        return({
            value:'',
            image:require('../assets/images/1.jpg'),
            checked:false
        })
    },
}
</script>

<style lang="stylus" scoped>
    .container
        overflow:hidden
        .product
            margin-top:3rem
        .pocket-list
            margin-top :.75rem
        .personal-info
            background :#fff
            margin-top: .75rem
            .line
                width :100%
                height :1px
                background :#dedede
                margin-left :.91rem
            .read-in
                text-align :right
                outline-style: none
                max-width :14rem
                font-size:.9rem
                margin-right :.88rem
            ::placeholder
                color :#b8b8b8
                font-size:300
</style>

