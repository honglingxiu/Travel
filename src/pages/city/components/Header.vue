<template>
  <div class="header">
    <div class="area">
      <router-link to="/" tag="i" class="iconfont icon-back"></router-link>
      <p><a href="#" class="actived">境内</a><a href="#">国际/地区</a></p>
    </div>
    <div class="input">
      <input type="text" v-model="keyword" placeholder="输入城市名或拼音">
      <div class="search-result content" ref="wrapper">
        <ul>
          <li v-for="(item ,index) in list" :key="index" @click="handleCityClick(item)">{{item}}</li>
        </ul>
      </div>
      <div class="search-mode" v-show="showMode"></div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'CityHeader',
    props:{
      cities:Object
    },
    data () {
      return {
        keyword:"",
        list:[],
        showMode:false
      }
    },
    methods:{
      handleCityClick(city){
        this.$store.dispatch("changeCity",city);
        this.$router.push("/");
      }
    },
    watch:{
      keyword(){
        var result=[];
        if(this.timer){
          clearTimeout(this.timer);
        }
        var _this=this;
        this.timer=setTimeout(function () {
          for(var key in _this.cities){
              for (var i=0;i<_this.cities[key].length;i++){
                var strObj=_this.cities[key][i];
                if(_this.keyword==""){
                  _this.list=[];
                  _this.showMode=false;
                  return ;
                }
                else if(strObj.spell.indexOf(_this.keyword)!=-1||strObj.name.indexOf(_this.keyword)!=-1){
                  result.push(strObj.name);
                  _this.showMode=true;
                }
              }
          }
          _this.list=result;
        },100);
      }
    },
    mounted(){
      this.scroll = new BScroll(this.$refs.wrapper,{click:true});
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
      position:relative
      input
        padding-left:.2rem
        width :100%
        height:.55rem
        border-radius :.05rem
        box-sizing :border-box
      input::-webkit-input-placeholder
        color:#ccc
      .search-mode
        height :100%
        width:100%
        background-color :#808080
        position :fixed
        left:0
        top:1.44rem
        z-index:99
        opacity :.5
      .search-result
        width :100%
        max-height :2rem
        overflow :hidden
        position :absolute
        left:0
        top:.55rem
        padding-left:.2rem
        background-color :#ffffff
        z-index:999
        box-sizing :border-box
        li
          line-height :.5rem
</style>
