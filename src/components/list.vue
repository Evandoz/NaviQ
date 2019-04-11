<template>
  <div class="cls-list">
    <div class="cls-item" v-for="(website, index) in websites" :key="index">
      <div class="cls-header">
        <h1 class="title">{{$t(website.class)}}</h1>
      </div>
      <div class="cls-content">
        <div class="card" v-for="(item, index) in website.content" :key="index">
          <!-- https://ico.mikelin.cn -->
          <!-- https://www.google.com/s2/favicons?domain= -->
          <a class="link" :href="item.url">
            <!-- <span class="tag">{{ item.tag }}</span> -->
            <img :src="'https://ico.mikelin.cn/'+item.url" :alt="item.title">
            <h2>{{ item.title }}</h2>
            <!-- <p v-if="item.desc">{{ item.desc }}</p> -->
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  props: {
    cls: {
      type: String
    }
  },
  data () {
    return {
      websites: {}
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._loadSite()
    })
  },
  methods: {
    _loadSite () {
      $.getJSON('data/' + this.cls + '.json', (response) => {
        this.websites = response.websites
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.cls-list
  margin: 0 auto
  @media screen and (min-width: 341px)
    width: 320px
  @media screen and (min-width: 523px)
    width: 490px
  @media screen and (min-width: 703px)
    width: 660px
  // screen = 768px -> width = 100% -> 660 / 0.94 = 703
  // @media screen and (min-width: 781px)
  //   width: 660px
  @media screen and (min-width: 981px)
    width: 830px
  @media screen and (min-width: 1182px)
    width: 1000px
  @media screen and (min-width: 1383px)
    width: 1170px
  @media screen and (min-width: 1584px)
    width: 1340px
  .cls-item
    .cls-header
      margin: 20px 0
      h1
        line-height: 1.8
        font-size: 18px
        font-weight: 500
        color: #112233
    .cls-content
      display: flex
      flex-wrap: wrap
      width: calc(100% + 20px)
      .card
        margin: 0 20px 20px 0
        background: #FFFFFF
        text-align: center
        border-radius: 1px
        .link
          position: relative
          display: block
          width: 150px
          height: 46px
          padding: 15px 5px
          box-sizing: border-box
          text-decoration: none
          .tag
            position: absolute
            top: 0
            left: 0
            width: 40px
            height: 20px
            line-height: 20px
            text-align: center
            color: #ffffff
            border-top-left-radius: 2px
            background: #2db7f5
          img, h2
            display: inline-block
          img
            vertical-align: top
          h2
            margin: 0
            line-height: 16px
            font-size: 15px
            color: #222333
            font-weight: 500
          p
            margin: 10px 0 0
            line-height: 1.4
            font-size: 14px
            color: #556677
</style>
