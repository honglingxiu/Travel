<template>
  <div>
    <div class="location">
      <p >您的位置</p>
      <div class="city border-topbottom">
        <div class="city-wrap">
          <span class="actived">北京</span>
        </div>
      </div>
    </div>
    <div class="location border-topbottom">
      <p>热门城市</p>
      <div class="city border-topbottom">
        <div class="city-wrap">
          <span>北京</span>
        </div>
        <div class="city-wrap">
          <span>北京</span>
        </div>
        <div class="city-wrap">
          <span>北京</span>
        </div>
        <div class="city-wrap">
          <span>北京</span>
        </div>
        <div class="city-wrap">
          <span>北京</span>
        </div>
        <div class="city-wrap">
          <span>北京</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CityList',
    data () {
      return {}
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .location
    p
      padding-left :.2rem
      line-height :.6rem
      color:#666
      background-color:#F1F1F0
    .border-topbottom
      &:before
        border-color:#666
      &:after
        border-color:#666
    .city
      padding :.2rem .4rem
      overflow :hidden
      .city-wrap
        margin-bottom :.1rem
        width :33.33%
        float :left
        span
          display :inline-block
          text-align: center
          padding :.1rem .7rem
          color:#333
          border: .02rem solid #ccc
          border-radius:.05rem
          &.actived
            color:$bgColor
            border: .02rem solid $bgColor
  
</style>
