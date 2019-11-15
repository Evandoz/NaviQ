<template>
  <div id="app">
    <div class="hidden-scrollbar">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
#app
  overflow: hidden

.hidden-scrollbar
  margin-right: -20px
  //overflow: auto
</style>
