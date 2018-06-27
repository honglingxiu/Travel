<template>
  <div>
    <div class="header">
      <div class="back"><i class="iconfont icon-back"></i></div>
      <div class="input">
        <input type="text" placeholder="输入城市/景点/游玩主题">
        <i class="iconfont icon-suosou"></i>
      </div>
      <router-link tag="div" to="./city" class="down">
        <span>{{this.city}}</span><i class="iconfont icon-sanjiaoxing-down"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapState} from "vuex"
  export default {
    name: 'HomeHeader',
    data () {
      return {}
    },
    computed:{
      ...mapState(["city"])
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display :flex
    background-color :$bgColor
    height :1.1rem
    align-items :center
    color: #ffffff
    .input
      flex:6
      position :relative
      i
        position :absolute
        color :#eee
        left:0rem
        top:.15rem
        font-size:.45rem
      input
        height .7rem
        width :100%
        border-radius :0.1rem
        padding-left:.45rem
        color :#eee
        box-sizing :border-box
      input::-webkit-input-placeholder
        color: #eee;
    .back
      flex: 1
      float:left
      text-align :center
      i
        font-size:.6rem
    .down
      flex :1
      float :right
      padding-left:.1rem
      position :relative
      i
        position :absolute
        left :.65rem
        top:.05rem


</style>
