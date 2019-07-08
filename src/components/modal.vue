<template>
    <div class="modal-container">
        <div class="modal-dialog">
            <div class="modal-title">
                <span :title="title">{{title}}</span>
                <i class="cubeic-close" @click="closeModal"></i>
            </div>
            <div class="modal-content">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:String
    },
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
}
</script>


<style lang="stylus" scoped>
    .modal-container
        position:fixed
        top:0
        left:0
        width:100%
        height:100%
        background: rgba(0,0,0,0.5)
        .modal-dialog
            position :absolute
            left: 2.97rem
            width :17.5rem
            height :20.2rem
            top:11.75rem
            background :#fff
            border-radius:.3rem
            .modal-title
                display :flex
                flex-direction :row
                width :100%
                height :2.69rem
                align-items :center
                justify-content :center
                border-bottom:1px solid #eee
                span 
                    color :#333
                    font-size:.69rem
                i 
                    position :absolute
                    right :.81rem
                    top:.81rem
</style>

