<template>
  <div class="banner" @click="handleShowGallery">
    <img src="https://qiniu-cdn0.jinxidao.com/group1/M00/1D/39/ooYBAFssXc2AaOjrAANU9GcZwMc731.jpg?imageView2/2/w/600/h/250/interlace/1/q/85" alt="">
    <div class="summary">
      <span class="left">广州长隆野生动物世界门票</span>
      <span class="right"><i class="iconfont icon-tupian"></i>39</span>
    </div>
    <common-gallery v-if="showGallery" @close="handleShowGalleryClose"></common-gallery>
  </div>
</template>

<script>
  import CommonGallery from "common/gallery/Gallery"
  export default {
    name: 'DetailBanner',
    data () {
      return {
        showGallery:false
      }
    },
    methods:{
      handleShowGallery(){
          this.showGallery=true;
      },
      handleShowGalleryClose(){
        this.showGallery=false;
      }
    },
    components:{
      CommonGallery
    }
  }
</script>
<style lang="stylus" scoped>
  .banner
    position:relative
    img
      width :100%
    .summary
      color: #ffffff
      width:100%
      position:absolute
      left:0
      bottom:0
      padding:0.1rem .4rem .1rem .2rem
      box-sizing :border-box
      background-image :linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .left
        float:left
      .right
        display :inline-block
        width:1rem
        text-align :center
        border-radius :.5rem
        background-color :rgb(33,33,33)
        float:right
        i
          margin-right:.05rem
</style>
