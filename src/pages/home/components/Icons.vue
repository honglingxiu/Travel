<template>
  <div class="icons">
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-hotel"></i>
      </div>
      <p>酒店</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-faxian"></i>
      </div>
      <p>泡温泉</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-erweima"></i>
      </div>
      <p>分界洲岛</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-huodong"></i>
      </div>
      <p>一日游</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-weibiaoti1"></i>
      </div>
      <p>大小洞天大小洞天</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-scenery"></i>
      </div>
      <p>自然风光</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-icon"></i>
      </div>
      <p>必游榜单</p>
    </div>
    <div class="icon">
      <div class="icon-img">
        <i class="iconfont icon-menpiao"></i>
      </div>
      <p>全部</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeIcons',
    data () {
      return {
        list:{
          id:"005",
          className:"455"
        }
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons
    height :0
    padding-bottom :50%
    .icon
      width :25%
      height :0
      padding-bottom :25%
      float:left
      box-sizing :border-box
      text-align :center
      .icon-img
        padding :0.25rem
        i
          background-color :$iconColor1
          color:#ffffff
          display :inline-block
          width :1rem
          line-height :1rem
          border-radius :.4rem
          font-size:.5rem
    p
      font-size:.24rem
      font-weight :500
      ellipsis()

</style>
