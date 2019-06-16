<template>
    <div class="container">
        <div class="details-commodity">
            <back-header showShare={true}></back-header>
            <details-card
                class="card"
                :pic="pic"
            >
            </details-card>
        </div>
        <details-info
            class="merchant"
            title="商家信息"
        > 
            <span class="client" :clientName="clientName">{{clientName}}</span>
            <div class="useInfo">
                <div class="use-rules" :useTime="useTime">使用时间:{{useTime}}</div>
            </div>
        </details-info>
        <more class="more">
            <div class="more-list">
                <discounts-card :image="image"></discounts-card>
                <discounts-card :image="image"></discounts-card>
            </div>
        </more>
    </div>
</template>

<script>
import BackHeader from '@/components/back-header'
import DetailsCard from '@/components/details-card'
import DetailsInfo from '@/components/details-info'
import More from '@/components/more'
import DiscountsCard from '@/components/discounts-card'

export default {
    components:{
        BackHeader,
        DetailsCard,
        DetailsInfo,
        More,
        DiscountsCard
    },
    data(){
        return({
            pic:require("../assets/images/card.png"),
            clientName:'上岛赫本时光花园餐厅',
            useTime:"09:00~23:00",
            image:require('../assets/images/card.png')
        })
    }
}
</script>

<style lang="stylus" scoped>
    .container
        .details-commodity
            padding-top:3rem
        .merchant
            margin-top :.88rem
            .client
            margin-top:.97rem
            font-weight:400
            .useInfo
                margin-top :.19rem
                .use-rules
                    margin-top:1rem
        .more
            display :flex
            flex-direction :column
            margin-top:.88rem
            .more-list
                display :flex
                flex-direction :row
        
</style>


