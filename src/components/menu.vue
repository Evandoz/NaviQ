<template>
  <div class="menu">
    <Menu :mode="mode" :active-name="activeName" width="auto">
      <MenuItem name="/so" to="/so">{{$t('Search')}}</MenuItem>
      <MenuItem name="/develop" to="/develop">{{$t('Develop')}}</MenuItem>
      <MenuItem name="/read" to="/read">{{$t('Read')}}</MenuItem>
      <MenuItem name="/media" to="/media">{{$t('Media')}}</MenuItem>
      <MenuItem name="/fav" to="/fav">{{$t('Fav')}}</MenuItem>
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
