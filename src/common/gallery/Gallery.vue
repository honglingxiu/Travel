<template>
  <div class="container" @click="handleShowGallery">
    <div class="mySwiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="(item,index) in items" :key="index">
          <img :src="item">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Gallery',
    data () {
      return {
        items:["http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg",
          "http://www.taopic.com/uploads/allimg/140113/267874-1401130T5468.jpg",
          "http://www.taopic.com/uploads/allimg/140507/240381-14050H2025093.jpg"],
        swiperOption: {
          /*spaceBetween: 30,*/
          centeredSlides: true,
          pagination: {
            el: '.swiper-pagination',
            type:"fraction"
          },
          loop:true,
          observeParents: true,
          observer: true,
        }
      }
    },
    methods:{
      handleShowGallery(e){
        this.$emit("close");
        e.stopPropagation();
      }
    },
    computed: {
      /*swiper() {
        return this.$refs.mySwiper.swiper;
      }*/
    },
    mounted() {
     /* //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);*/
    }
  }
</script>
<style lang="stylus" scoped>
  .container>>>.swiper-container
    overflow :inherit
  .container
    width: 100%
    height:100%
    background-color :#000000
    display :flex
    flex-direction :column
    justify-content :center
    position :fixed
    z-index:99
    left:0
    top:0
    .mySwiper
      width:100%
      padding-bottom:100%
      height:0
      /*overflow :hidden*/
      .swiper-pagination
        color: #ffffff
        bottom :-1rem
      img
        width:100%

</style>

