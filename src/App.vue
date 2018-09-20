<template>
  <div id="app">
    <elheader></elheader>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <elfooter></elfooter>
  </div>
</template>

<script>

import footer from '@/components/footer'
import header from '@/components/header'

export default {
  name: 'App',
  components: {
    'elfooter': footer,
    'elheader': header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width: 100%
  min-height: 100vh
  display: flex
  flex-direction: column
  justify-content: space-between
</style>
