<template>
  <div class="wrapper">
    <div class="serach-wrapper">
      <Form ref="formSearch" :model="formSearch" :rules="ruleSearch">
        <FormItem prop="keyword">
          <Input type="text" v-model="formSearch.keyword" size="large" icon="ios-search" @on-click="handleSubmit('formSearch')"></Input>
        </FormItem>
      </Form>
    </div>
    <looter></looter>
  </div>
</template>

<script>

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
      }
    }
  },
  created () {
    this.$nextTick(() => {

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
</style>
