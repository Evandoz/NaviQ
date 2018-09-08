<template>
  <div class="container">
    <div class="serach-wrapper">
      <Form ref="formSearch" :model="formSearch" :rules="ruleSearch">
        <FormItem prop="keyword">
          <Input type="text" v-model="formSearch.keyword" size="large" icon="ios-search" @on-click="handleSubmit('formSearch')"></Input>
        </FormItem>
      </Form>
    </div>
    <div class="navigation-wrapper">
      <div class="navigation" v-for="(website, index) in websites" :key="index">
        <div class="header">
          <h2 class="title">{{ website.class }}</h2>
        </div>
        <div class="content">
          <Card :bordered="false" :padding="0" v-for="(item, index) in website.content" :key="index">
            <!-- https://ico.mikelin.cn -->
            <!-- https://www.google.com/s2/favicons?domain= -->
            <a class="link" :href="item.url">
              <img :src="'https://ico.mikelin.cn/'+item.url" :alt="item.title">
              <h3>{{ item.title }}</h3>
              <p v-if="item.subtitle">{{ item.subtitle }}</p>
            </a>
          </Card>
        </div>
      </div>
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
      formSearch: {
        keyword: ''
      },
      ruleSearch: {
        keyword: [
          // { required: true, message: 'Please input keyword to search', trigger: 'blur' }
        ]
      },
      websites: {}
    }
  },
  created () {
    this.$nextTick(() => {
      this._loadSite()
    })
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          window.open('https://www.baidu.com/s?wd=' + this.formSearch.keyword)
        } else {
          this.$Message.error('Error Input !')
        }
      })
    },
    _loadSite () {
      $.getJSON('static/json/websites.json', (response) => {
        this.websites = response.websites
      })
    }
  },
  components: {
    'looter': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.container
  width: 100%
  height: 100%
  display: flex
  flex-direction: column
  justify-content: space-around
  .serach-wrapper
    background: #ffffff
    .ivu-form
      max-width: 600px
      margin: 24px auto 28px
      .ivu-form-item
        margin-bottom: 0
        .ivu-input-icon
          width: 60px
          font-size: 20px
          color: #fff
          background: #57a3f3
          border-radius: 0 18px 18px 0
          cursor: pointer
        .ivu-input
          padding-left: 15px
          padding-right: 60px
          border-radius: 18px
  .navigation-wrapper
    display: flex
    flex-direction: column
    padding: 30px 0
    align-items: center
    .navigation
      width: 96%
      margin: 10px auto
      .header
        padding: 10px
      .content
        display: flex
        flex-wrap: wrap
        .ivu-card
          width: 260px
          margin: 10px
          text-align: center
          border-radius: 2px
          .link
            display: block
            padding: 20px 10px
            img, h3
              display: inline-block
              height: 24px
            img
              padding: 4px 2px
              vertical-align: top
            h3
              line-height: 24px
            p
              margin-top: 5px
</style>
