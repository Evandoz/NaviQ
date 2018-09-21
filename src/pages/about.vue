<template>
  <div class="content">
    <h1>NaviQ</h1>
    <p>Personal Website Navigation</p>
  </div>
</template>

<script>

export default {
  data () {
    return {
      websites: {}
    }
  },
  created () {
    this.$nextTick(() => {

    })
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  flex: 1
  padding: 4vh 4vw
  background: #F5F5F5
</style>
