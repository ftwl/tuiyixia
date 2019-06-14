<template>
    <div class="container">
        <Header :header="header" />
        <Tab class="tabs" :current="current"  @ListenActive="isActive">
            <div
                v-for="(content,index) in tabMain"
                :key="index"
                v-show="current==index"
                class="tab-container"
                >
                <Card :image="image"></Card>
            </div>
        </Tab>
    </div>
</template>

<script>
import Header from '@/components/header'
import Tab from '@/components/tab'
import Card from '@/components/card'
export default {
    components:{
        Header,
        Tab,
        Card
    },
    data(){
        return({
            header:'发现',
            current:0,
            tabMain:['1','2'],
            image:require('../assets/images/card.png')
        })
    },
    methods:{
        isActive(){
            if(this.current == 0){
                this.current = 1
            }else{
                this.current = 0
            }
        }
    }
}
</script>

<style lang="stylus" scoped>
    .container
        position: absolute
        display: flex
        flex-direction :column
        width: 100%
        .tabs
            position:relative
            width : 5rem
            top: 4.5rem
            .tab-container
                position: relative
                top:2.2rem
            
        
</style>


