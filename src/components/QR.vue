<template>
    <div class="container">
        <div class="qr"  v-if="qr===1">
            <span>商家扫码验券即可消费</span>
            <img class="bar-code" :src="bar_code" alt="条形码"/>
            <img class="qr-code" :src="qr_code" alt="二维码"/>
            <div class="promotion-code"><a>优惠码:</a><span>0011</span>
                                                     <span>7789</span>
                                                    <span>6699</span></div>
        </div>
        <div class="qrs" v-if="qr>1">
            <div class="code">
                <div class="code-list">
                    <a>券码:</a><span>1001</span><span>8857</span><span>0608</span>
                </div>
                <i class="iconfont icon-erweima" @click="showConfirm"></i>
            </div>
            <div class="code">
                <div class="code-list">
                    <a>券码:</a><span>1001</span><span>8857</span><span>0608</span>
                </div>
                <i class="iconfont icon-erweima" @click="showConfirm"></i>
            </div>
        </div>
        <Modal v-show="showModal" @closeModal="closeModal" title="请服务员扫描以下条形码验券">
            <div class="qr" slot="content">
                <div class="promotion-code"><a>优惠码:</a><span>0011</span>
                                                     <span>7789</span>
                                                    <span>6699</span></div>
                <img class="bar-code" :src="bar_code" alt="条形码"/>
                <img class="qr-code" :src="qr_code" alt="二维码"/>
            </div>
        </Modal>
    </div>
</template>

<script>
import Modal from '@/components/modal'
export default {
    components:{
        Modal
    },
    props:{
        qr:Number,
        bar_code:String,
        qr_code:String
    },
    data(){
        return({
            showModal:false
        })
    },
    methods:{
        showConfirm(){
            this.showModal = true
        },
        closeModal(){
            this.showModal = false
        }
    }
}
</script>

<style lang="stylus" scoped>
    .qr
        display :flex
        flex-direction :column
        justify-content :center
        align-items :center
        span 
            font-size:.69rem
        .bar-code
            width :16.25rem
            height :3.44rem
            margin:.88rem 0rem
        .qr-code
            width :9.25rem
            height :9.25rem
        .promotion-code
            margin-top :.63rem
            a
                font-size:.88rem
                margin-right :.1rem
                color :#333
            span
                font-size:.88rem
                margin :0 .28rem
    .qrs
        display :flex
        flex-direction :column
        .code
            display :flex
            flex-direction :row
            align-items :center
            justify-content :space-between
            width :100%
            font-size:1rem
            .iconfont
                font-size:1.6rem
            .code-list
                margin :.3rem 0
                a
                    color :#333
                    margin-right :.2rem
                span 
                    margin:0  .3rem
</style>


