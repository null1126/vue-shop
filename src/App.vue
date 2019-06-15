<template>
  <div id="app">
    <!-- 路由部分 -->
    <router-view></router-view>

    <!-- 底部导航 -->
    <FooterGuide v-show="$route.meta.showFooter"></FooterGuide>  <!-- showFooter为true才显示该组件 -->
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    width 100%
    height 100%
    background #f5f5f5
</style>
