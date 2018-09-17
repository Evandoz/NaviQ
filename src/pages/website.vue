<template>
  <div class="wrapper">
    <div class="content">
      <Tabs>
        <TabPane :label="website.class" v-for="(website, index) in websites" :key="index" ref="tabPane">
          <div class="navigation">
            <div class="cls-header">
              <h2 class="title">{{ website.class }}</h2>
            </div>
            <div class="cls-content">
              <Card :bordered="false" :padding="0" v-for="(item, index) in website.content" :key="index">
                <!-- https://ico.mikelin.cn -->
                <!-- https://www.google.com/s2/favicons?domain= -->
                <!-- <Tooltip v-if="item.desc" :content="item.desc" placement="top" :max-width="280"> -->
                  <a class="link" :href="item.url">
                    <span class="tag">{{ item.tag }}</span>
                    <img :src="'https://ico.mikelin.cn/'+item.url" :alt="item.title">
                    <h3>{{ item.title }}</h3>
                    <p v-if="item.desc">{{ item.desc }}</p>
                  </a>
                <!-- </Tooltip> -->
              </Card>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
    <looter></looter>
  </div>
</template>

<script>

import $ from 'jquery'
import footer from '@/components/footer'

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
  mounted () {
    this.resizeHight()
  },
  methods: {
    _loadSite () {
      $.getJSON('static/json/websites.json', (response) => {
        this.websites = response.websites
      })
    },
    resizeHight () {
      let child = this.$refs.tabPane
      console.log(child)
    }
  },
  components: {
    'looter': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.wrapper
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-around
  .content
    background: #efefef
    .ivu-tabs-bar
      background: #ffffff
      .ivu-tabs-nav-scrollable
        padding: 0 26px
    .ivu-tabs-nav-prev,
    .ivu-tabs-nav-next
      padding: 0 5px
      line-height: 40px
      font-size: 16px
      background: #ffffff
      z-index: 4
    .ivu-tabs-nav
      .ivu-tabs-tab
        padding: 10px
        font-size: 16px
    .navigation
      width: 96vw
      margin: 10px auto
      .cls-header
        padding: 10px
        text-align: center
      .cls-content
        display: flex
        justify-content: space-around
        flex-wrap: wrap
        .ivu-card
          margin: 10px
          text-align: center
          border-radius: 2px
          .link
            position: relative
            display: block
            width: 280px
            padding: 20px 10px
            .tag
              position: absolute
              top: 0
              left: 0
              width: 50px
              height: 25px
              line-height: 25px
              text-align: center
              color: #ffffff
              border-top-left-radius: 2px
              background: #2db7f5
            img, h3
              display: inline-block
              height: 24px
            img
              padding: 4px 2px
              vertical-align: top
            h3
              line-height: 24px
              color: #334455
            p
              margin-top: 5px
              color: #556677
</style>
