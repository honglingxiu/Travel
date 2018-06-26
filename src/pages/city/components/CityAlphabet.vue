<template>
  <div >
    <ul class="list">
      <li
        @click="handlerLetter"
        v-for="item of letters" :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'CityAlphabet',
    props:{
      cities:Object
    },
    data () {
      return {
        touchStatus:false,
        startY:0
      }
    },
    computed:{
      letters(){
        const letters = []
        for (let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    methods:{
      handlerLetter(e){
        this.$emit("change",e.target.innerText);
      },
      handleTouchStart(){
        this.touchStatus=true;
      },
      handleTouchMove(e){
        if(this.touchStatus){
          if(this.timer){
            clearTimeout(this.timer);
          }
          var _this=this;
          this.timer=setTimeout(function () {
            const touchY=e.touches[0].clientY;
            const index = Math.floor((touchY - _this.startY) / _this.$refs['A'][0].offsetHeight);
            if (index >= 0 && index < _this.letters.length) {
              _this.$emit('change', _this.letters[index])
            }
          },16);
        }
      },
      handleTouchEnd(){
        this.touchStatus=false;
      }
    },
    updated(){
      this.startY=this.$refs['A'][0].offsetTop;
    }
  }
</script>
<style lang="stylus" scoped>
  .list
    display :flex
    position:absolute
    height :100%
    flex-direction :column
    justify-content :center
    right:.1rem
    top:0rem
    li
      padding :.01rem .05rem
</style>
