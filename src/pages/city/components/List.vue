<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="location">
        <p>您的位置</p>
        <div class="city border-topbottom">
          <div class="city-wrap">
            <span class="actived">{{this.$store.state.city}}</span>
          </div>
        </div>
      </div>
      <div class="location border-topbottom">
        <p>热门城市</p>
        <div class="city border-topbottom">
          <div class="city-wrap" v-for="item of hotCities" :key="item.id">
            <span @click="handleCityClick(item.name)">{{item.name}}</span>
          </div>
        </div>
      </div>
      <div class="city-list">
        <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
          <p class="border-bottom">{{key}}</p>
          <ul class="content">
            <li class="border-bottom"
                v-for="innerItem in item"
                :key="innerItem.id" @click="handleCityClick(innerItem.name)">{{innerItem.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CityList',
    props:{
      letter:String,
      hotCities:Array,
      cities:Object
    },
    data () {
      return {}
    },
    methods:{
      handleCityClick(city){
        this.$store.commit("change",city);
        this.$router.push("/");
      }
    },
    mounted(){
       this.scroll = new BScroll(this.$refs.wrapper,{
         click: true
       });
    },
    watch:{
      letter(){
        var element=this.$refs[this.letter];
        this.scroll.scrollToElement(element[0]);
      }
    }
  }
</script>
<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    position :absolute
    left:0
    top:1.48rem
    bottom:0
    overflow :hidden
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
    .city-list
      p
        padding-left :.2rem
        line-height :.6rem
        color:#666
        background-color:#F1F1F0
      .border-bottom
        &:before
          border-color:#666
      ul
        li
          padding :.18rem .2rem
          color :#333
        .border-bottom
        &:before
          border-color:#eeeeee

</style>
