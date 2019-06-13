<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return{
      transitionName:''
    }
  },
   watch:{
  '$route' (to, from) {
    const toDepth = to.path.split('/')[1].length
    const fromDepth = from.path.split('/')[1].length
    this.transitionName = toDepth - fromDepth > 0 ? 'slide-right' : 'slide-left'
  }}
}
</script>

<style lang="stylus">

body
  background: #f5f5f5

.slide-right-enter-active
         transition:all .15s
         transition-delay: .15s

.slide-right-leave-active 
         transition:all .15s


.slide-right-enter 
        transform: translateX(-100%)
        opacity: 0

.slide-right-leave-to 
  transform: translateX(100%)
  opacity: 0


.slide-left-enter-active
  transition:all .15s
  transition-delay: .15s

.slide-left-leave-active
  transition:all .15s

.slide-left-enter
  transform: translateX(100%)
  opacity: 0

.slide-left-leave-to
  transform: translateX(-100%)
  opacity: 0

</style>

