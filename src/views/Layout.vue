<template>
  <div class="wrapper">
    <div class="header">
      <div class="container">
        <div class="icon" @click="showMobile"><Icon type="ios-menu" /></div>
        <h1 class="title"><a href="/Navigation/">NaviQ</a></h1>
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
    </div>
    <div class="content">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <div class="footer">
      <div class="container">
        <p>&copy; 2018 <a href="https://Evandoz.github.io">Levan</a></p>
        <p>Thanks to <a href="https://ico.mikelin.cn/">ICO_API</a> for Providing Favicon API</p>
      </div>
    </div>
  </div>
</template>

<script>

import menu from '@/components/menu'

export default {
  name: 'Layout',
  components: {
    'elmenu': menu
  },
  data () {
    return {
      horMode: 'horizontal',
      verMode: 'vertical',
      websites: {},
      mobileShow: false
    }
  },
  mounted () {

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
  }
}
</script>
<style lang="stylus" scoped>
.wrapper
  width: 100vw
  //height: 100vh

.header
  height: 60px
  padding: 0 3vw
  line-height: 60px
  box-shadow 0 0 50px 20px rgba(0, 0, 0, .05)
  .container
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
        display: flex
        flex-direction: column
        justify-content: center
        >.ivu-menu
          padding-bottom: 32px
          &.ivu-menu-vertical
            &.ivu-menu-light
              &:after
                content: none
            .ivu-menu-item,
            .ivu-menu-submenu-title
              line-height: 1.5
              text-align: center
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
        z-index: 999
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

.content
  flex: 1
  padding: 0 3vw
  .container
    margin: 50px auto
    @media screen and (max-width: 553px)
      padding: 0 3vw
    @media screen and (min-width: 768px)
      width: 90%
      min-width: 722px

.footer
  padding: 0 3vw
  .container
    padding: 16px 0
    p
      height: 24px
      margin: 0
      line-height: @height
      font-size: 14px
      color: #334455
      text-align: center
    a
      color: #223344
      text-decoration: none
</style>
