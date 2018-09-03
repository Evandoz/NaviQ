<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  display: flex
  flex-direction: column
  justify-content: space-around
  align-items: center
  min-height: 100%
  background: #f2f2f2
</style>
