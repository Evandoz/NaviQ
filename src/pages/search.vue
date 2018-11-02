<template>
  <div class="content">
    <div class="search">
      <Input v-model="keyword">
        <Select v-model="select" slot="prepend">
            <Option v-for="(item, index) in engines" :value="item.site" :key="index">{{ item.name }}</Option>
        </Select>
        <Button slot="append" icon="ios-search" @click.native.prevent="handleSubmit('formSearch')"></Button>
      </Input>
    </div>
    <list :cls="cls"></list>
  </div>
</template>

<script>

import list from '@/components/list'

export default {
  data () {
    return {
      engines: [
        {
          name: 'Google',
          site: 'https://www.google.com/search?q='
        },
        {
          name: 'Bing',
          site: 'https://www.bing.com/search?q='
        }
      ],
      select: 'https://www.google.com/search?q=',
      keyword: '',
      cls: 'engine'
    }
  },
  created () {
    this.$nextTick(() => {

    })
  },
  methods: {
    handleSubmit (name) {
      window.open(this.select + this.keyword)
    }
  },
  components: {
    'list': list
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.content
  .search
    max-width: 1000px
    margin: 0 auto
    *
      font-size: 14px!important
      outline: none
    .ivu-select
      width: 90px
    .ivu-input
      height: 40px
    .ivu-btn
      width: 50px
      height: 40px
      padding: 0
      line-height: 40px
      border: none
      .ivu-icon
        font-size: 18px!important
  .nonclass
    display: flex
    flex-wrap: wrap
    justify-content: space-around
    padding: 50px 0
    .card
      margin-bottom: 20px
      background: #FFFFFF
      text-align: center
      border-radius: 1px
      // border: 1px solid #EEEEEE
      .link
        position: relative
        display: block
        width: 160px
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
