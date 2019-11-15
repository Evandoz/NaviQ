<template>
  <div class="menu">
    <Menu :mode="mode" :active-name="activeName" width="auto">
      <MenuItem name="/dev" to="/dev">{{$t('Develop')}}</MenuItem>
      <MenuItem name="/design" to="/design">{{$t('Design')}}</MenuItem>
      <MenuItem name="/read" to="/read">{{$t('Read')}}</MenuItem>
      <MenuItem name="/tool" to="/tool">{{$t('Tool')}}</MenuItem>
      <MenuItem name="/other" to="/other">{{$t('Other')}}</MenuItem>
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

<style lang="stylus" scoped>

</style>
