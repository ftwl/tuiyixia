<template>
    <div class="header" :header="header">{{header}}</div>
</template>

<script>
export default {
   props:{
       header:String
   }
}
</script>

<style lang="stylus" scoped>
    .header
            width: 100%
            height :3.94rem
            font-weight :400
            font-family :"MicrosoftYaHei"
            font-size:1rem
            line-height :3.94rem
            text-align :center
            color : #fff
            background : linear-gradient(60deg,#ff4256,#fd9355)
            
</style>

