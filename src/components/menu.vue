<template>
  <div class="menu">
    <Menu :mode="mode" :active-name="activeName" width="auto">
      <MenuItem name="/so" to="/so">{{$t('Search')}}</MenuItem>
      <Submenu name="/dev">
          <template slot="title" to="">{{$t('All')}}</template>
          <MenuItem name="/design" to="/design">{{$t('Design')}}</MenuItem>
          <MenuItem name="/develop" to="/develop">{{$t('Develop')}}</MenuItem>
          <MenuItem name="/history" to="/history">{{$t('History')}}</MenuItem>
          <MenuItem name="/reading" to="/reading">{{$t('Reading')}}</MenuItem>
          <MenuItem name="/media" to="/media">{{$t('Media')}}</MenuItem>
          <MenuItem name="/workdoc" to="/workdoc">{{$t('Work')}}</MenuItem>
          <MenuItem name="/lifeservice" to="/lifeservice">{{$t('Life')}}</MenuItem>
          <MenuItem name="/map" to="/map">{{$t('Map')}}</MenuItem>
          <MenuItem name="/markdown" to="/markdown">{{$t('Markdown')}}</MenuItem>
      </Submenu>
      <MenuItem name="/tool" to="/tool">{{$t('Tool')}}</MenuItem>
      <MenuItem name="/smsol" to="/smsol">{{$t('SMSOL')}}</MenuItem>
      <MenuItem name="/fav" to="/fav">{{$t('Fav')}}</MenuItem>
      <MenuItem name="/other" to="/other">{{$t('Navi')}}</MenuItem>
      <MenuItem name="/about" to="/about">{{$t('About')}}</MenuItem>
    </Menu>
  </div>
</template>

<script>

export default {
  props: {
    mode: {
      type: String
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  computed: {
    activeName () {
      let activeName = this.$route.path
      let index = activeName.indexOf('/', 1)
      if (index !== -1) {
        return activeName.substring(0, index)
      }
      return activeName
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
