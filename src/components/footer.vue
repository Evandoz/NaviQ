<template>
  <div class="footer">
    <p>&copy; 2018 <a href="https://Evandoz.github.io">Levan</a></p>
    <p>Thanks to <a href="https://ico.mikelin.cn/">ICO_API</a> for Providing Favicon API</p>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  methods: {

  }
}
</script>

<style lang="stylus" scoped>
.footer
  padding: 15px 2%
  p
    margin: 0
    line-height: 1.8
    font-size: 14px
    color: #334455
    text-align: center
  a
    color: #223344
    text-decoration: none
</style>
