<template>
  <div>
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <div class="content"></div>
  </div>
</template>

<script>
  import DetailHeader from "./components/Header"
  import DetailBanner from "./components/Banner"
  export default {
    name: 'Detail',
    data () {
      return {}
    },
    components:{
      DetailHeader,
      DetailBanner
    }
  }
</script>
<style lang="stylus" scoped>
  .content
    height:50rem
</style>
