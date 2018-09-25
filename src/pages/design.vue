<template>
  <div class="content">
    <list :cls="cls"></list>
  </div>
</template>

<script>

import list from '@/components/list'

export default {
  data () {
    return {
      cls: 'design'
    }
  },
  created () {
    this.$nextTick(() => {

    })
  },
  methods: {

  },
  components: {
    'list': list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
