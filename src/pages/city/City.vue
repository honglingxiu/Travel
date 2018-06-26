<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from "./components/Header"
  import CityList from "./components/List"
  import CityAlphabet from "./components/CityAlphabet"
  export default {
    name: 'City',
    data () {
      return {}
    },
    components:{
      CityHeader,
      CityList,
      CityAlphabet
    }
  }
</script>
<style lang="stylus" scoped>
</style>
