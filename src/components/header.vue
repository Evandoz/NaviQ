<template>
  <div class="header">
    <h1 class="title">NaviQ</h1>
    <el-menu :default-active="activeIndex" class="nav-menu" mode="horizontal">
      <el-menu-item index="/so"><router-link to="/so" class="item-link">搜索</router-link></el-menu-item>
      <el-menu-item index="/all"><router-link to="/all" class="item-link">所有站点</router-link></el-menu-item>
      <el-menu-item index="/other"><router-link to="/other" class="item-link">其他导航</router-link></el-menu-item>
      <el-menu-item index="/about"><router-link to="/other" class="item-link">关于</router-link></el-menu-item>
    </el-menu>
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
  computed: {
    activeIndex () {
      let activeIndex = this.$route.path
      console.log(activeIndex)
      let index = activeIndex.indexOf('/', 1)
      if (index !== -1) {
        return activeIndex.substring(0, index)
      }
      return activeIndex
    }
  },
  methods: {

  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 5vw
  .title
    margin: 0
    font-size: 24px
    font-weight: 500
  .nav-menu
    margin: 0 -20px
    border-bottom: none
    .el-menu-item
      position: relative
      border-bottom: none
      &.is-active
        &:after
          content: ''
          position: absolute
          left: calc(50% - 6px)
          bottom: 9px
          height: 4px
          width: 12px
          background: #409EFF
      .item-link
        text-decoration: none

</style>
