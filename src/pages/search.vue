<template>
  <div class="content">
    <div class="search">
      <el-form :model="formSearch" :rules="ruleSearch" ref="formSearch">
        <el-form-item prop="keyword">
          <el-input type="text" v-model="formSearch.keyword">
            <el-select v-model="select" slot="prepend">
              <el-option v-for="(item, index) in engines" :label="item.name" :value="item.site" :key="index"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click.native.prevent="handleSubmit('formSearch')"></el-button>
          </el-input>
        </el-form-item>
      </el-form>
    </div>
    <div class="nonclass">
      <div class="card" v-for="(item, index) in search" :key="index">
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
      engines: [
        {
          name: 'Google',
          site: 'https://www.google.com/search?q='
        },
        {
          name: 'Bing',
          site: 'https://www.bing.com/search?q='
        },
        {
          name: 'Baidu',
          site: 'https://www.baidu.com/s?wd='
        }
      ],
      select: 'https://www.google.com/search?q=',
      search: {}
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
        this.search = response.search
      })
    },
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          window.open(this.select + this.formSearch.keyword)
        } else {
          this.$message.error('Error Input !')
        }
      })
    }
  },
  components: {
    'looter': footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  flex: 1
  padding: 5vh 5vw
  background: #F5F5F5
  .search
    .el-form
      max-width: 600px
      margin: 0 auto
      .el-form-item
        margin: 0!important
      .el-select
        .el-input
          width: 100px
  .nonclass
    display: flex
    flex-wrap: wrap
    justify-content: space-between
    padding: 4vh 0
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
