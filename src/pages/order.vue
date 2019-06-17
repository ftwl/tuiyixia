<template>
    <div class="container">
        <back-header class="order" title="订单"></back-header>
        <cube-tab-bar   class="tabs" 
                        v-model="selectedLabel" 
                        :data="tabLabels"
                        showSlider>
        </cube-tab-bar>
        <div class="tab-slide-container">
            <cube-slide
                :loop="loop"
                :autoPlay="autoPlay"
                :showDots="showDots"
                :initial-index="initialIndex"
                @change="changePage"
            >
                <cube-slide-item value="all" label="全部订单">
                   <cube-scroll>
                        <status-card
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            payed
                        ></status-card>
                        <status-card
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay
                        ></status-card>
                        <status-card
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            end></status-card>
                        <status-card
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            timeout></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            timeout></status-card>
                        <div class="nomore">没有更多订单了</div>
                   </cube-scroll>
                </cube-slide-item>
                <cube-slide-item value="wait" label="待支付">
                   <cube-scroll>
                        <status-card
                             title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay
                            ></status-card>
                        <status-card
                             title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            nopay></status-card>
                        <div class="nomore">没有更多订单了</div>
                   </cube-scroll>
                </cube-slide-item>
                <cube-slide-item>
                   <cube-scroll value="used" label="可使用">
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            payed></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            payed></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            payed></status-card>
                        <status-card 
                            title="新贝音乐餐厅90代100元券，商品优惠幅度较大"
                            :image="image"
                            payed></status-card>
                        <div class="nomore">没有更多订单了</div>
                   </cube-scroll>
                </cube-slide-item>
            </cube-slide>
        </div>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import StatusCard from '@/components/status-card'
import { findIndex } from '@/common/helpers/find-index'
export default {
    components:{
        BackHeader,
        StatusCard
    },
    computed: {
      initialIndex () {
        let index = 0
        index = findIndex(this.tabLabels, item => item.label === this.selectedLabel)
        return index
      }
    },
    data(){
        return({
            selectedLabel:'全部订单',
            image:require('../assets/images/order.png'),
            loop:false,
            autoPlay:false,
            showDots:false,
            tabLabels:[{
                label: '全部订单'
            }, {
                label: '待支付'
            }, {
                label: '可使用'
            }]
        })
    },
    methods:{
      changePage (current) {
        this.selectedLabel = this.tabLabels[current].label
      },
    }
}
</script>

<style lang="stylus" scoped>
    .container
        .order
            border-bottom :1px solid #dedede
        .tabs
            padding-top:3rem
        .tab-slide-container
            position: fixed
            top: 5rem
            left: 0
            right: 0
            bottom: 0
            .nomore
                display :flex
                flex-direction :row
                align-items :center
                justify-content :center
                font-size:.69rem
                color :#b8b8b8
</style>


