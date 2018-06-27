<template>
  <div>
    <city-header :cities="cities"></city-header>
    <city-list :letter="letter" :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet @change="change" :cities="cities"></city-alphabet>
  </div>
</template>

<script>
  import axios from 'axios'
  import CityHeader from "./components/Header"
  import CityList from "./components/List"
  import CityAlphabet from "./components/CityAlphabet"
  export default {
    name: 'City',
    data () {
      return {
        cities: {},
        hotCities: [],
        letter: ''
      }
    },
    methods:{
      change(letter){
        this.letter=letter
      },
      getCityInfo () {
        axios.get('/api/city.json')
          .then(this.handleGetCityInfoSucc)
      },
      handleGetCityInfoSucc (res) {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.cities = data.cities
          this.hotCities = data.hotCities
        }
      },
    },
    components:{
      CityHeader,
      CityList,
      CityAlphabet
    },
    mounted(){
      this.getCityInfo();
    }
  }
</script>
<style lang="stylus" scoped>
</style>
