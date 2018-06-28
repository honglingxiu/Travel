<template>
  <div class="header">
    <div class="back" v-if="!showSuspendBack">
      <router-link tag="i" to="/" class="iconfont icon-back"></router-link>
    </div>
    <div class="suspend-back" v-if="showSuspendBack" :style="opacityStyle">
      <router-link tag="i" to="/" class="iconfont icon-back"></router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailHeader',
    data () {
      return {
        showSuspendBack:false,
        opacityStyle:{
          opacity:0
        }
      }
    },
    methods:{
      handleScroll(){
        if(document.documentElement.scrollTop>50){
          this.showSuspendBack=true;
          let opacity=document.documentElement.scrollTop/140;
          this.opacityStyle.opacity=opacity>1? 1:opacity
        }else{
          this.showSuspendBack=false;
        }
      }
    },
    activated(){
      window.addEventListener("scroll",this.handleScroll);
    },
    deactivated(){
      window.removeEventListener("scroll",this.handleScroll);
    }
  }
</script>
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header
    width:100%
    position :fixed
    box-sizing :border-box
    left:0
    top:0
    z-index :99
    .back
      width:100%
      height:1rem
      padding:.1rem .1rem
      box-sizing :border-box
      i
        display :inline-block
        text-align:center
        width :.5rem
        line-height:.5rem
        background-color :#333333
        color:#ffffff
        font-size:.35rem
        border-radius:.5rem
    .suspend-back
      height:1rem
      padding:.1rem .1rem
      box-sizing :border-box
      background-color :$bgColor
      i
        color:#ffffff
        font-size:.7rem
        line-height :.9rem


</style>
