<template>
    <div class="container">
        <div class="details-commodity">
            <details-header></details-header>
            <details-card
                class="card"
                :pic="pic"
            >
            </details-card>
        </div>
        <details-merchant 
            class="merchant"
            :clientName="clientName"
            :useTime="useTime"
            ></details-merchant>
        <more class="more">
            <div class="more-list">
                <discounts-card :image="image"></discounts-card>
                <discounts-card :image="image"></discounts-card>
            </div>
        </more>
        <notice></notice>
    </div>
</template>

<script>
import DetailsHeader from '@/components/details-header'
import DetailsCard from '@/components/details-card'
import DetailsMerchant from '@/components/details-merchant'
import More from '@/components/more'
import DiscountsCard from '@/components/discounts-card'
import Notice from '@/components/notice'

export default {
    components:{
        DetailsHeader,
        DetailsCard,
        DetailsMerchant,
        More,
        DiscountsCard,
        Notice
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
        .more
            display :flex
            flex-direction :column
            margin-top:.88rem
            .more-list
                display :flex
                flex-direction :row
        
</style>


