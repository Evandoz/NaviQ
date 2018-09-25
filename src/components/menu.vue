<template>
  <div class="menu">
    <Menu :mode="mode" :active-name="activeName" width="auto">
      <MenuItem name="/so" to="/so">搜索</MenuItem>
      <Submenu name="/dev">
          <template slot="title" to="">所有站点</template>
          <MenuItem name="/design" to="/design">设计</MenuItem>
          <MenuItem name="/develop" to="/develop">开发</MenuItem>
          <MenuItem name="/history" to="/history">历史</MenuItem>
          <MenuItem name="/reading" to="/reading">阅读</MenuItem>
          <MenuItem name="/media" to="/media">媒体</MenuItem>
          <MenuItem name="/workdoc" to="/workdoc">工作&文档</MenuItem>
          <MenuItem name="/lifeservice" to="/lifeservice">生活服务</MenuItem>
          <MenuItem name="/all" to="/all">其他</MenuItem>
      </Submenu>
      <MenuItem name="/other" to="/other">其他导航</MenuItem>
      <MenuItem name="/about" to="/about">关于</MenuItem>
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
