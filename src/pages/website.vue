<template>
  <div class="content">
    <el-tabs>
      <el-tab-pane :label="website.class" v-for="(website, index) in websites" :key="index" ref="tabPane">
        <div class="navigation">
          <!-- <div class="cls-header">
            <h1 class="title">{{ website.class }}</h1>
          </div> -->
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
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>

import $ from 'jquery'

export default {
  data () {
    return {
      websites: {}
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
        this.websites = response.websites
      })
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  flex: 1
  padding: 4vh 4vw
  background: #F5F5F5
  .el-tabs__header
    background: #FFFFFF
    .el-tabs__nav-wrap.is-scrollable
      padding: 0 30px
    .el-tabs__nav-prev,
    .el-tabs__nav-next
      width: 30px
      text-align: center
    .el-tabs__nav-prev,
    .el-tabs__nav-next,
    .el-tabs__item
      height: 50px
      line-height: 50px
  .navigation
    margin: 10px auto
    .cls-header
      margin: 20px 0
      text-align: center
      h1
        line-height: 1.8
        font-size: 18px
    .cls-content
      display: flex
      flex-wrap: wrap
      justify-content: space-between
      .card
        margin-bottom: 20px
        background: #FFFFFF
        text-align: center
        border-radius: 1px
        // border: 1px solid #EEEEEE
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
