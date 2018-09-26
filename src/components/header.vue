<template>
  <div class="header">
    <div class="icon" @click="showMobile"><Icon type="ios-menu" /></div>
    <h1 class="title"><a href="/">NaviQ</a></h1>
    <elmenu :mode="horMode"></elmenu>
    <transition name="slide">
      <div class="mobile" v-show="mobileShow">
        <elmenu :mode="verMode"></elmenu>
        <div class="icon" @click="hideMobile"><Icon type="ios-close" /></div>
      </div>
    </transition>
    <transition name="fade">
      <div class="mask" v-show="mobileShow" @click="hideMobile"></div>
    </transition>
  </div>
</template>

<script>

import menu from './menu'

export default {
  data () {
    return {
      horMode: 'horizontal',
      verMode: 'vertical',
      websites: {},
      mobileShow: false
    }
  },
  mounted () {
    this.$nextTick(() => {

    })
  },
  watch: {
    $route () {
      this.hideMobile()
    }
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
    showMobile () {
      this.mobileShow = true
    },
    hideMobile () {
      this.mobileShow = false
    }
  },
  components: {
    'elmenu': menu
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
  position: relative
  display: flex
  margin: 0 auto
  justify-content: center
  align-items: center
  z-index: 4
  @media screen and (min-width: 768px)
    width: 90%
    min-width: 722px
    justify-content: space-between
  >.icon
    position: absolute
    top: 14px
    left: 0
    width: 32px
    height: 32px
    font-size: 32px
    .ivu-icon
      vertical-align: top
    @media screen and (min-width: 768px)
      display: none
  >.title
    height: 60px
    margin: 0
    font-size: 24px
    font-weight: 500
    background: #FFFFFF
    box-sizing: border-box
    a
      color: #223344
      text-decoration: none
  >.menu
    margin: 0 -20px
    @media screen and (max-width: 767px)
      display: none
    .ivu-menu-horizontal
      &.ivu-menu-light
        &:after
          content: none
  .mobile
    position: fixed
    top: 0
    left: 0
    width: 210px
    height: 100%
    background: #FFFFFF
    transform: translate3d(0, 0, 0)
    overflow: auto
    z-index: 4
    &.slide-enter-active
      transition: all 0.4s
    &.slide-enter, &.slide-leave-active
      transform: translate3d(-100%, 0, 0)
    &.slide-leave-active
      transition: all 0.2s
    >.menu
      min-height: 100%
      >.ivu-menu
        padding-top: 6vh
        padding-bottom: calc(6vh + 32px)
        &.ivu-menu-vertical
          &.ivu-menu-light
            &:after
              content: none
          .ivu-menu-item,
          .ivu-menu-submenu-title
            line-height: 1.5
            &:after
              content: none
    >.icon
      position: relative
      width: 32px
      height: 32px
      margin: calc(-6vh - 32px) auto 0 auto
      font-size: 32px
      color: #000000
      clear: both
      z-index： 999
      .ivu-icon
        vertical-align: top
  .mask
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: rgba(0, 0, 0, .5)
    &.fade-enter-active, &.fade-leave-active
      transition: all .3s
</style>
