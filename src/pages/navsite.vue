<template>
  <div class="content">
    <div class="nonclass">
      <div class="card" v-for="(item, index) in navsites" :key="index">
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
</template>

<script>

import $ from 'jquery'

export default {
  data () {
    return {
      navsites: {}
    }
  },
  created () {
    this.$nextTick(() => {
      this._loadSite()
    })
  },
  methods: {
    _loadSite () {
      $.getJSON('static/json/websites.json', (response) => {
        this.navsites = response.navsites
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  flex: 1
  padding: 5vh 5vw
  background: #F5F5F5
  .nonclass
    flex: 1
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    .card
      margin: 10px 0
      background: #FFFFFF
      text-align: center
      border-radius: 2px
      border: 1px solid #eee
      transition: background .3s ease-in-out
      &:hover, &:focus
        background: #EEEEEE
      .link
        position: relative
        display: block
        width: 180px
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
          line-height: 1
          font-size: 16px
          color: #222333
          font-weight: 500
        p
          margin: 10px 0 0
          line-height: 1.4
          font-size: 14px
          color: #556677
</style>
