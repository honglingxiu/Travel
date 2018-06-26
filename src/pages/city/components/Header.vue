<template>
  <div class="header">
    <div class="area">
      <i class="iconfont icon-back"></i>
      <p><a href="#" class="actived">境内</a><a href="#">国际/地区</a></p>
    </div>
    <div class="input">
      <input type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityHeader',
    data () {
      return {}
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .header
    background-color :$bgColor
    padding :.15rem
    .area
      position :relative
      color: #ffffff
      text-align :center
      p
        display :inline-block
        border: 1px solid #ffffff
        border-radius :.05rem
        a
          display :inline-block
          text-align :center
          width :2rem
          padding :.1rem 0
          color: #ffffff
        .actived
          background-color :#ffffff
          color :$bgColor

      i
        position :absolute
        left:-.1rem
        top:0
        font-size:.5rem
    .input
      margin-top:.1rem
      input
        padding-left:.2rem
        width :100%
        height:.55rem
        border-radius :.05rem
        box-sizing :border-box
      input::-webkit-input-placeholder
        color:#ccc
</style>
