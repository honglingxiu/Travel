<template>
  <div class="mySwiper">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item,index) in items" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
  export default {
    name: 'HomeSwiper',
    data(pagination = {
      el: '.swiper-pagination',
      clickable: true
    }) {
      return {
        items:["http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg",
          "http://www.taopic.com/uploads/allimg/140113/267874-1401130T5468.jpg",
          "http://www.taopic.com/uploads/allimg/140507/240381-14050H2025093.jpg"],
        swiperOption: {
          spaceBetween: 30,
          centeredSlides: true,
          autoplay: {
            delay: 2500,
            disableOnInteraction: false
          },
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          loop:true

        }
      }
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      //这边就可以使用swiper这个对象去使用swiper官网中的那些方法
      this.swiper.slideTo(0, 0, false);
    }
  }
</script>
<style lang="stylus" scoped>
  .mySwiper
    height :4.2rem
    overflow :hidden
    background :#eee;
    img
      width :100%
      height :4.2rem
</style>
