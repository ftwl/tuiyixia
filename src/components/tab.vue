<template>
    <div class="container" style="width:100%;">
        <div 
            class="tab-title"
            style="position:absolute;right:.88rem;"
            >
            <li 
                :tabTitle="tabTitle"
                v-for="(title,index) in tabTitle" 
                @click="isActive"
                :key="index"
                :class="{active:current==index}">{{title}}</li>
        </div>
        <div class="tab-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        current:Number
    },
    data(){
        return({tabTitle: ['最新', '附近']
        })
    },
    methods:{
        isActive(){
            this.$emit('ListenActive')
        }
    }
}
</script>

<style lang="stylus" scoped>
    .tab-title
        display :flex
        flex-direction :row
        list-style :none
        border :1px solid #fc5467
        width : 5rem
        height :1.38rem
        align-items :center
        justify-content space-between
        border-radius:.3rem
        position: absolute
        li
            display :flex
            flex-direction :row
            color : #fc5467
            width :50%
            height :100%
            font-size:.64rem
            cursor: pointer
            align-items :center
            justify-content :center
        .active
            color : #fff
            background-color :#fc5467

</style>


