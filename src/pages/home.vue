<template>
  <div class="container">
    <div class="serach-wrapper">
      <Form ref="formSearch" :model="formSearch" :rules="ruleSearch">
        <FormItem prop="keyword">
          <Input type="text" v-model="formSearch.keyword" size="large" icon="ios-search" class="search-bar" @on-click="handleSubmit('formSearch')"></Input>
        </FormItem>
      </Form>
    </div>
    <div class="navigation-wrapper">
      <div class="navigation" v-for="(website, index) in websites" :key="index">
        <div class="header">
          <h2 class="title">{{ website.category }}</h2>
        </div>
        <div class="content">
          <Card :padding="0" v-for="(item, index) in website.content" :key="index">
            <!-- 'https://www.google.com/s2/favicons?domain='+website.url -->
            <a class="link" :href="item.url">
              <img :src="'https://www.google.com/s2/favicons?domain='+item.url" alt="">
              <h3>{{ item.title }}</h3>
              <p v-if="item.subtitle">{{ item.subtitle }}</p>
            </a>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import $ from 'jquery'

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
    width: 90%
    max-width: 500px
    .search-bar
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
    align-items: center
    .navigation
      width: 90%
      margin: 0 auto
      .header
        padding: 10px
      .content
        display: flex
        flex-wrap: wrap
        .ivu-card
          width: 280px
          margin: 10px
          text-align: center
          .link
            display: block
            padding: 20px
</style>
